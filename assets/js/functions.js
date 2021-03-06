function addFixture(match, active = true) {
    let matchDiv = $(`<div class='col-8 match' data-id=${match.id}>`);
    let dateDiv = $("<div class='col-4'>");
    let homePredict = $(`<span>`).text(` ${predictions[match.id]["home_result"]}`);
    let awayPredict = $(`<span>`).text(`${predictions[match.id]["away_result"]} `);
    if (active) {
        dateDiv.append(`Match starts <span class="match-start-in">${moment(match.date).from(moment())}</span> at `);
        dateDiv.append(`<span class="match-time">${moment(match.date).format("M/D h:mma")}</span>`);
        homePredict = $(` <input type="text" size="2" class="home-result">`).val(predictions[match.id]["home_result"]);
        awayPredict = $(`<input class="away-result" type="text" size="2"> `).val(predictions[match.id]["away_result"]);
    }
    matchDiv.append(`<label class="home-team">${getTeamName(match.home_team)}</label>`);
    matchDiv.append(homePredict, " vs ");
    matchDiv.append(awayPredict);
    matchDiv.append(`<label class="away-team">${getTeamName(match.away_team)}</label>`);
    if (active) {
        $("#predictions-active").append(matchDiv, dateDiv);
    } else {
        $("#predictions-inactive").append(matchDiv);
    }
}

function addFixtureReal(match) {
    let matchDiv = $(`<div class='col-8 match' data-id=${match.id}>`);
    let dateDiv = $("<div class='col-4'>");
    let homeReal = $(` <input type="text" size="2" class="home-result">`).val(match["home_result"] != null ? match["home_result"] : "");
    let awayReal = $(`<input class="away-result" type="text" size="2"> `).val(match["away_result"] != null ? match["away_result"] : "");
    dateDiv.append(`<span class="match-time">${moment(match.date).format("M/D h:mma")}</span>`);
    matchDiv.append(`<label class="home-team">${getTeamName(match.home_team)}</label>`);
    matchDiv.append(homeReal, " vs ");
    matchDiv.append(awayReal);
    matchDiv.append(`<label class="away-team">${getTeamName(match.away_team)}</label>`);
    $("#fixture-active").append(matchDiv, dateDiv);
}

function getTeams(callback) {
    wcRef.doc("teams").get()
        .then(function (doc) {
            if (doc.exists) {
                let tempTeams = doc.data().teams;
                for (let i = 0; i < tempTeams.length; i++) {
                    let team = {
                        name: tempTeams[i].name,
                        flag: tempTeams[i].flag,
                    }
                    teams[tempTeams[i].id] = team;
                }
            }
            callback();
        });
}

function getTeamName(id) {
    if (teams[id]) {
        return teams[id].name;
    } else {
        return "TBD";
    }
}

function uploadPredictions() {
    usersRef.doc(user.providerData[0].uid).get()
        .then(function (snap) {
            if (snap.exists) {
                usersRef.doc(user.providerData[0].uid).update({ predictions: Object.assign({}, predictions) })
                    .then(function () {
                        $("#confirm-msg").text("Predictions updated!");
                        console.log("updated uid");
                    })
                    .catch(function (error) {
                        console.log("Error writing document: " + error);
                        $("#confirm-msg").text("There was an error, please try again later");
                    });
            } else {
                // usersRef.doc(user.providerData[0].uid).set({ name: user.displayName })
                //     .then(function () {
                //         $("#confirm-msg").text("Predictions updated!");
                //     })
                //     .catch(function (error) {
                //         console.log("Error writing document: " + error);
                //         $("#confirm-msg").text("There was an error, please try again later");
                //     });

                usersRef.doc(user.providerData[0].uid).set({ name: user.displayName, predictions: Object.assign({}, predictions) })
                    .then(function () {
                        console.log("set new uid");
                        $("#confirm-msg").text("Predictions updated!");
                    })
                    .catch(function (error) {
                        console.log("Error writing document: " + error);
                        $("#confirm-msg").text("There was an error, please try again later");
                    });
            }
        })
}

function updateAllScores(uid) {
    usersRef.doc(uid).update({ predictions: Object.assign({}, predictions) })
        .then(function () {
            console.log("update uid");
            $("#confirm-msg").text("Predictions updated!");
        })
        .catch(function (error) {
            console.log("Error writing document: " + error);
            $("#confirm-msg").text("There was an error, please try again later");
        });
}

function uploadScores() {
    console.log("uploading scores...");
    for (let i = 1; i < 2; i++) {
        let updateScores = {};
        // updateScores[matches[i]["group"]] = {};
        // updateScores[matches[i]["group"]][`matches.${matches[i]["firestoreId"]}`] = {
        //     "away_result": matches[i]["away_result"],
        //     "home_result": matches[i]["home_result"]
        // };
        updateScores["matches"] = {}
        updateScores["matches"][`${matches[i]["firestoreId"]}`] = {
            "away_result": matches[i]["away_result"],
            "home_result": matches[i]["home_result"]
        };
        console.log(updateScores);
        wcRef.doc("matches-test").collection("groups").doc(matches[i]["group"]).update(updateScores)
            .then(function () {
                console.log("uploading...");
                $("#confirm-msg").text("Scores updated!");
            })
            .catch(function (error) {
                console.log("Error writing document: " + error);
                $("#confirm-msg").text("There was an error, please try again later");
            });
    }
}

function getPredictions(uid) {
    usersRef.doc(uid).get()
        .then(function (snap) {
            if (snap.exists) {
                $.each(snap.data()["predictions"], function (id, val) {
                    predictions[id] = val;
                });
            }
            // get matches
            wcRef.doc("matches-test").get()
                .then(function (doc) {
                    if (doc.exists) {
                        // $.each(doc.data(), function (matchType, stage) {
                        // $.each(stage, function (group, val) {
                        $.each(doc.data()["knockout"], function (group, val) {
                            // doc.data().forEach(function (group, val) {
                            for (let i = 0; i < val.matches.length; i++) {
                                let days = moment(val.matches[i].date).diff(moment(), "days");
                                let seconds = moment(val.matches[i].date).diff(moment(), "seconds");
                                // console.log(days);
                                let match = {
                                    id: val.matches[i].name,
                                    group: group,
                                    home_team: val.matches[i].home_team,
                                    away_team: val.matches[i].away_team,
                                    home_result: val.matches[i].home_result,
                                    away_result: val.matches[i].away_result,
                                    stadium: val.matches[i].stadium,
                                    type: val.matches[i].type,
                                    date: val.matches[i].date,
                                };
                                matches[val.matches[i].name] = match;
                                if (days <= rangeLimit && days >= 0 && seconds >= 0) {
                                    if (predictions[val.matches[i].name]) {
                                        predictions[val.matches[i].name]["date"] = val.matches[i].date;
                                    } else {
                                        predictions[val.matches[i].name] = { date: val.matches[i].date };
                                    }
                                    // only add fixture if match has determined teams
                                    if (match.home_team < teams.length && match.home_team > 0) {
                                        addFixture(match);
                                    }
                                }
                                // else if (seconds < 0) {
                                //     addFixture(match, false);
                                // }
                            }
                        });
                        // });
                    }
                });
        });
}

function getPredictionsTest(uid, predictions, callback) {
    usersRef.doc(uid).get()
        .then(function (snap) {
            if (snap.exists) {
                $.each(snap.data()["predictions"], function (id, val) {
                    predictions[id] = val;
                });
                callback(predictions);
            }
        });
    // return predictions;
}

// get matches
function getMatches(callback) {
    wcRef.doc("matches-test").get()
        .then(function (doc) {
            if (doc.exists) {
                $.each(doc.data(), function (matchType, stage) {
                    $.each(stage, function (group, val) {
                        for (let i = 0; i < val.matches.length; i++) {
                            let days = moment(val.matches[i].date).diff(moment(), "days");
                            let seconds = moment(val.matches[i].date).diff(moment(), "seconds");
                            // console.log(days);
                            let match = {
                                id: val.matches[i].name,
                                group: group,
                                home_team: val.matches[i].home_team,
                                away_team: val.matches[i].away_team,
                                home_result: val.matches[i].home_result,
                                away_result: val.matches[i].away_result,
                                stadium: val.matches[i].stadium,
                                type: val.matches[i].type,
                                date: val.matches[i].date,
                            };
                            matches[val.matches[i].name] = match;
                        }
                    });
                });
                callback();
            }
        });
}

function createFixtures() {
    console.log("creating fixtures");
    console.log(matches);
    for (let i = 1; i <= matches.length; i++) {
        let days = moment(matches[i].date).diff(moment(), "days");
        let seconds = moment(matches[i].date).diff(moment(), "seconds");
        console.log(i + " | " + matches[i] + " | " + days);
        if (days <= rangeLimit && days >= 0 && seconds >= 0) {
            if (predictions[i]) {
                predictions[i]["date"] = matches[i].date;
            } else {
                predictions[i] = { date: matches[i].date };
            }
            addFixture(matches[i]);
        } else {
            addFixture(matches[i], false);
        }
    }
}

// compare predictions to actual scores
function calcPts(match, userPred, i) {
    // console.log(`${i} User: ${userPred["home_result"]}-${userPred["away_result"]} | Real: ${match["home_result"]}-${match["away_result"]} | ${getTeamName(match["home_team"])} vs. ${getTeamName(match["away_team"])}`);
    if (userPred["home_result"] == match["home_result"] && userPred["away_result"] == match["away_result"]) {
        // console.log(`${i} User: ${userPred["home_result"]}-${userPred["away_result"]} | Real: ${match["home_result"]}-${match["away_result"]} | ${getTeamName(match["home_team"])} vs. ${getTeamName(match["away_team"])} score`);
        return pts.score;
    } else if (userPred["home_result"] == userPred["away_result"] && match["home_result"] == match["away_result"]) {
        // console.log(`${i} User: ${userPred["home_result"]}-${userPred["away_result"]} | Real: ${match["home_result"]}-${match["away_result"]} | ${getTeamName(match["home_team"])} vs. ${getTeamName(match["away_team"])} draw`);
        return pts.result;
    } else if (userPred["home_result"] > userPred["away_result"] && match["home_result"] > match["away_result"]) {
        // console.log(`${i} User: ${userPred["home_result"]}-${userPred["away_result"]} | Real: ${match["home_result"]}-${match["away_result"]} | ${getTeamName(match["home_team"])} vs. ${getTeamName(match["away_team"])} win`);
        return pts.result;
    } else if (userPred["home_result"] < userPred["away_result"] && match["home_result"] < match["away_result"]) {
        // console.log(`${i} User: ${userPred["home_result"]}-${userPred["away_result"]} | Real: ${match["home_result"]}-${match["away_result"]} | ${getTeamName(match["home_team"])} vs. ${getTeamName(match["away_team"])} win`);
        return pts.result;
    } else {
        // console.log(`${i} User: ${userPred["home_result"]}-${userPred["away_result"]} | Real: ${match["home_result"]}-${match["away_result"]} | ${getTeamName(match["home_team"])} vs. ${getTeamName(match["away_team"])} wrong`);
        return 0;
    }
}

// sign out
$("#sign-out").on("click", function () {
    firebase.auth().signOut().then(function () {
        console.log('Signed Out');
        window.location = ("index.html");
    }, function (error) {
        console.error('Sign Out Error', error);
    });
});
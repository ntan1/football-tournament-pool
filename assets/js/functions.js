function addFixture(match, active = true) {
    let matchDiv = $(`<div class='col-8 match' data-id=${match.id}>`);
    let homePredict = $(`<span class="home-result">`).text(predictions[match.id]["home_result"]);
    let awayPredict = $(`<span class="away-result">`).text(predictions[match.id]["away_result"]);
    let dateDiv = $("<div class='col-4'>");
    if (active) {
        dateDiv.append(`Match starts <span class="match-start-in">${moment(match.date).from(moment())}</span> at `);
        dateDiv.append(`<span class="match-time">${moment(match.date).format("M/D h:mma")}</span>`);
        homePredict = $(`<input type="text" size="2" class="home-result">`).val(predictions[match.id]["home_result"]);
        awayPredict = $(`<input class="away-result" type="text" size="2">`).val(predictions[match.id]["away_result"]);
    }
    matchDiv.append(`<label class="home-team">${getTeamName(match.home_team)}</label>`);
    matchDiv.append(homePredict, " vs ");
    matchDiv.append(awayPredict);
    matchDiv.append(`<label class="away-team">${getTeamName(match.away_team)}</label>`);
    if (active) {
        $("#predictions-inactive").append(matchDiv, dateDiv);
    } else {
        $("#predictions-active").append(matchDiv);
    }
}

function getTeamName(id) {
    return teams[id].name;
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

function getPredictions(uid) {
    usersRef.doc(uid).get()
        .then(function (snap) {
            if (snap.exists) {
                $.each(snap.data()["predictions"], function (id, val) {
                    predictions[id] = val;
                });
            }
            // get matches
            wcRef.doc("matches").get()
                .then(function (doc) {
                    if (doc.exists) {
                        $.each(doc.data(), function (group, val) {
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
                                    home_result: "",
                                    away_result: "",
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
                                    addFixture(match);
                                } else {
                                    addFixture(match, false);
                                }
                            }
                        });
                    }
                });
        });
}
$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (theUser) {
        if (theUser) {
            // User is signed in.
            user = theUser;
            if (theUser.providerData[0].uid === "104550093457820575291") {
                console.log("admin on");
                getTeams(function () {
                    getMatches();
                });
            } else {
                console.log("not allowed");
                $("main").html("");
                window.location = 'home.html';
            }
        } else {
            // No user is signed in.
            console.log("not logged in");
            $("main").html("");
            window.location = 'index.html';
        }
    });

    // submit scores
    $("#submitRealScores").on("click", function () {
        $("#confirm-msg").text("");
        let allScores = $("#fixture-active").find(".match");
        let completed = true;
        for (let i = 0; i < allScores.length; i++) {
            let id = $(allScores[i]).data("id");
            let homeScore = parseInt($(allScores[i]).find(".home-result").val());
            let awayScore = parseInt($(allScores[i]).find(".away-result").val());
            if (!isNaN(homeScore) && !isNaN(awayScore) && homeScore >= 0 && awayScore >= 0) {
                let match = {
                    home_result: homeScore,
                    away_result: awayScore,
                }
                // predictions[id]= match;
                matches[id]["home_result"] = homeScore;
                matches[id]["away_result"] = awayScore;
            } else {
                $("#confirm-msg").text("Please fill out all scores and only integers allowed");
                completed = false;
                break;
            }
        }
        console.log(matches);
        if (completed) {
            uploadScores();
        }
    });

    // calc pts
    $("#calcPts").on("click", function () {
        $("#confirm-msg-calc").text("");
        // get all user predictions
        usersRef.get()
            .then(docs => {
                docs.forEach(user => {
                    // console.log(user.id + ": " + user.data().name);
                    let userPredictions = [];
                    let userPts = 0;
                    let games = 0;
                    // userPredictions = getPredictionsTest(user.id, userPredictions);
                    getPredictionsTest(user.id, userPredictions, (pred) => {
                        // console.log(matches);
                        for (let i = 1; i < matches.length; i++) {
                            if (matches[i]["home_result"] !== null) {
                                if (pred[i]) {
                                    userPts += calcPts(matches[i], pred[i], i);
                                    games++;
                                }
                            }
                        }

                        // tally points and store in firestore
                        wcRef.doc("standings").update({
                            [user.id]: {
                                name: user.data().name,
                                games: games,
                                points: userPts
                            }
                        })
                            .then(function () {
                                wcRef.doc("standings").update({
                                    updated: moment.utc().format()
                                })
                                console.log("update uid");
                                $("#confirm-msg-calc").text("Updated standings!");
                            })
                            .catch(function (error) {
                                console.log("Error writing document: " + error);
                                $("#confirm-msg-calc").text("There was an error, please try again later");
                            });
                        console.log(`${user.data().name}: ${userPts}`);
                    });
                });
            });
    });

    // get user predictions
    $("#submitUid").on("click", function () {
        predictions = [];
        $("#predictions-active").html("");
        getPredictionsAdmin($("#uid").val(), +$("#firstID").val(), +$("#secondID").val());
    });

    // get all predictions
    function getPredictionsAdmin(uid, firstID, secondID) {
        usersRef.doc(uid).get()
            .then(function (snap) {
                if (snap.exists) {
                    $.each(snap.data()["predictions"], function (id, val) {
                        predictions[id] = val;
                    });
                }
                // get matches
                for (let i = firstID; i <= secondID; i++) {
                    if (predictions[matches[i].id]) {
                        predictions[matches[i].id]["date"] = matches[i].date;
                    } else {
                        predictions[matches[i].id] = { date: matches[i].date };
                    }
                    // only add fixture if match has determined teams
                    if (matches[i].home_team < teams.length && matches[i].home_team > 0) {
                        addFixture(matches[i]);
                    }
                }
            });
    }

    // submit predictions for admin
    $("#submitPredictions").on("click", function () {
        $("#confirm-msg").text("");
        let allPredictions = $("#predictions-active").find(".match");
        let completed = true;
        for (let i = 0; i < allPredictions.length; i++) {
            let id = $(allPredictions[i]).data("id");
            let homeScore = parseInt($(allPredictions[i]).find(".home-result").val());
            let awayScore = parseInt($(allPredictions[i]).find(".away-result").val());
            if (!isNaN(homeScore) && !isNaN(awayScore) && homeScore >= 0 && awayScore >= 0) {
                let match = {
                    home_result: homeScore,
                    away_result: awayScore,
                }
                // predictions[id]= match;
                predictions[id]["home_result"] = homeScore;
                predictions[id]["away_result"] = awayScore;
            } else {
                $("#confirm-msg").text("Please fill out all predictions and only integers allowed");
                completed = false;
                break;
            }
        }
        console.log(predictions);
        if (completed && $("#uid").val()) {
            updateAllScores($("#uid").val());
        }
    });
});
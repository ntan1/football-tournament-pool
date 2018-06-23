$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (theUser) {
        if (theUser) {
            // User is signed in.
            user = theUser;
            if (theUser.providerData[0].uid === "104550093457820575291") {
                console.log("admin on");
                // $.when(getTeams())
                //     .done(function () {
                //         // get matches
                //         $.when(getMatches())
                //             .done(function () {
                //                 console.log("creating fixtures");
                //                 console.log(matches.length);
                //                 for (let i = 0; i < matches.length; i++) {
                //                     if (moment(matches[i].date).diff(moment(), "minutes") < 0) {
                //                         console.log("adding fixture " + i);
                //                         addFixture(matches[i]);
                //                     }
                //                 }
                //                 console.log("created fixtures");
                //             });
                //     });
                getTeams();
                setTimeout(() => {
                    getMatches();
                    setTimeout(() => {
                        console.log("creating fixtures");
                        for (let i = 1; i < 2; i++) {
                            if (moment(matches[i].date).diff(moment(), "minutes") < 0) {
                                addFixtureReal(matches[i]);
                            }
                        }
                        console.log("created fixtures");
                    }, 500);
                }, 500);
            } else {
                console.log("not allowed");
            }
        } else {
            // No user is signed in.
            console.log("not logged in");
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

    // sign out
    $("#sign-out").on("click", function () {
        firebase.auth().signOut().then(function () {
            console.log('Signed Out');
            window.location = ("index.html");
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    });
});
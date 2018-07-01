$(document).ready(function () {
    let standings = [];

    firebase.auth().onAuthStateChanged(function (theUser) {
        if (theUser) {
            // User is signed in.
            user = theUser;
            // get past predictions
            getMatches(function () {
                getTeams(function () {
                    getPredictionsTest(theUser.providerData[0].uid, predictions, () => {
                        for (let i = 1; i < matches.length; i++) {
                            let seconds = moment(matches[i].date).diff(moment(), "seconds");
                            if (seconds < 0) {
                                addFixture(matches[i], false);
                            }
                        }
                    })
                });
            });
        } else {
            // No user is signed in.
            console.log("not logged in");
        }
    });
});
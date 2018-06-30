$(document).ready(function () {
    let standings = [];

    firebase.auth().onAuthStateChanged(function (theUser) {
        if (theUser) {
            // User is signed in.
            user = theUser;
            // get all user predictions

        } else {
            // No user is signed in.
            console.log("not logged in");
        }
    });

    usersRef.get()
        .then(docs => {
            getMatches(() => {
                let pos = 1;
                docs.forEach(user => {
                    // console.log(user.id + ": " + user.data().name);
                    let userPredictions = [];
                    let userPts = 0;
                    // userPredictions = getPredictionsTest(user.id, userPredictions);
                    getPredictionsTest(user.id, userPredictions, (pred) => {
                        // console.log(matches);
                        for (let i = 1; i < matches.length; i++) {
                            if (matches[i]["home_result"] !== null) {
                                if (pred[i]) {
                                    userPts += calcPts(matches[i], pred[i], i);
                                }
                            }
                        }
                        standings.push({
                            name: user.data().name,
                            pts: userPts
                        });
                        $("#standings-table").find("tbody").append(
                            `<tr><td>${pos}</td><td>${user.data().name}</td><td>${userPts}</td></tr>`
                        );
                        pos++;
                    });
                });
            });
            // standings.sort((a,b) => {
            //     return a.pts - b.pts;
            // })
            // for (let i = 0; i < standings.length; i++) {
            //     $("#standings-table").find("tbody").append(
            //         `<tr><td>${i+1}</td><td>${standings[i].name}</td><td>${standings[i].pts}</td></tr>`
            //     );
            // }
        });

    // create functions for getting pts and rendering table
    // create new standings page to use above functions

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
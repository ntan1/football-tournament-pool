$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (theUser) {
        if (theUser) {
            // User is signed in.
            user = theUser;
            $.when(getTeams())
                .done(function () {
                    // get matches
                    getMatches();
                    console.log("got matches");
                })
                .done(function () {
                    // get predictions 
                    getPredictionsTest(theUser.providerData[0].uid);
                    console.log("got predictions");
                })
                .done(function () {
                    console.log(matches);
                    createFixtures();
                    console.log("created fixtures");
                });
        } else {
            // No user is signed in.
            console.log("not logged in");
        }
    });

    // get teams
    // getTeams();

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
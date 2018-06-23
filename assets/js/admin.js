$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (theUser) {
        if (theUser) {
            // User is signed in.
            user = theUser;
            if (theUser.providerData[0].uid === 104550093457820575291) {
                console.log("admin on");
                $.when(getTeams())
                    .done(function () {
                        // get matches
                        $.when(getMatches())
                            .done(function () {
                                for (let i = 0; i < matches.length; i++) {
                                    if (moment(matches[i].date).diff(moment(), "minutes") < 0) {
                                        addFixture(matches[i]);
                                    }
                                }
                                console.log("created fixtures");
                            });
                    })
            } else {
                console.log("not allowed");
            }
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
$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (theUser) {
        if (theUser) {
            // User is signed in.
            user = theUser;
            // get teams
            getTeams();
            // get predictions 
            getPredictions(theUser.providerData[0].uid);
        } else {
            // No user is signed in.
            console.log("not logged in");
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
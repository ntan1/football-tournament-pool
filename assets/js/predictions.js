$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (theUser) {
        if (theUser) {
            // User is signed in.
            user = theUser;
            // get predictions 
            getPredictions(theUser.providerData[0].uid);
        } else {
            // No user is signed in.
            console.log("not logged in");
        }
    });
});
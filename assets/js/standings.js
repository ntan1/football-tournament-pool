$(document).ready(function () {
    let standings = [];

    firebase.auth().onAuthStateChanged(function (theUser) {
        if (theUser) {
            // User is signed in.
            user = theUser;
            // get standings
            wcRef.doc("standings").get()
                .then(doc => {
                    console.log(doc.data());
                    $.each(doc.data(), (user, data) => {
                        console.log(data.name);
                        standings.push({
                            name: data.name,
                            points: data.points,
                            points: data.games,
                        });
                    });
                    console.log(standings);
                    standings.sort((a, b) => {
                        return b.points - a.points;
                    })
                    for (let i = 0; i < standings.length; i++) {
                        $("#standings-table").find("tbody").append(
                            `<tr><td>${i + 1}</td><td>${standings[i].name}</td><td>${standings[i].games}</td><td>${standings[i].points}</td></tr>`
                        );
                    }
                    $("#last-updated").text(`Updated ${moment(doc.data().updated).format("M/D h:mma")}`);
                });
        } else {
            // No user is signed in.
            console.log("not logged in");
        }
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
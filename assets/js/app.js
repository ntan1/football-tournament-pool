$(document).ready(function () {

  let redirectUrl = "home.html";
  // let user = firebase.auth().currentUser;

  // firebase.auth().onAuthStateChanged(function (user) {
  //   // user = user;
  //   if (user) {
  //     // User is signed in.
  //     console.log(user);
  //     $("#welcome-msg").text(`Welcome ${user.displayName}`);
  //   } else {
  //     window.location = 'index.html';

  //   }
  // });

  // if (user != null) {
  //   user.providerData.forEach(function (profile) {
  //     console.log("Sign-in provider: " + profile.providerId);
  //     console.log("  Provider-specific UID: " + profile.uid);
  //     console.log("  Name: " + profile.displayName);
  //     console.log("  Email: " + profile.email);
  //     console.log("  Photo URL: " + profile.photoURL);
  //   });
  //   console.log("user obj" + user);
  // }
  // $("#welcome-msg").text(`Welcome ${user.displayName}`);

  // fb.ref("/").on("value", function (snap) {
  //   console.log(snap.val());
  // });

  // add matches to database

  const tournament = "world-cup-2018";
  const wcRef = db.collection(tournament);

  function addMatches(tournament) {
    // $.each(matches[stage], function (group, val) {
    //   wcRef.doc("matches").collection("groups").doc(group).set(val)
      wcRef.doc("matches-test").set(matches)
        .then(function () {
          console.log("written");
        })
        .catch(function (error) {
          console.log("Error adding doc: " + error)
        });
    // });
  }

  function addStadiums(tournament) {
    wcRef.doc("stadiums").set(stadiums)
      .then(function () {
        console.log("written");
      })
      .catch(function (error) {
        console.log("Error adding doc: " + error)
      });
  }

  function addTeams(tournament) {
    wcRef.doc("teams").set(teams)
      .then(function () {
        console.log("written");
      })
      .catch(function (error) {
        console.log("Error adding doc: " + error)
      });
  }

  addMatches(tournament);
  // addStadiums(tournament);
  // addTeams(tournament);


});
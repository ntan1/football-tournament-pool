$(document).ready(function () {

  let redirectUrl = "home.html";
  firebase.auth().onAuthStateChanged(function (theUser) {
    if (theUser) {
      // User is signed in.
      user = theUser;
      console.log(theUser);
      theUser.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
        getPredictions(profile.uid);
      });
      $("#welcome-msg").text(`Welcome ${theUser.displayName}`);
      // get predictions 
    } else {
      // No user is signed in.
      console.log("not logged in");
    }
  });

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

  // get teams
  wcRef.doc("teams").get()
    .then(function (doc) {
      if (doc.exists) {
        let tempTeams = doc.data().teams;
        console.log(doc.data());
        for (let i = 0; i < tempTeams.length; i++) {
          let team = {
            name: tempTeams[i].name,
            flag: tempTeams[i].flag,
          }
          teams[tempTeams[i].id] = team;
        }
      }
    });


  // submit action
  $("#submitPredictions").on("click", function () {
    $("#confirm-msg").text("");
    let allPredictions = $("#predictions").find(".match");
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
        predictions[id] = match;
      } else {
        $("#confirm-msg").text("Please fill out all predictions and only integers allowed");
        completed = false;
        break;
      }
    }
    console.log(predictions);
    if (completed) {
      uploadPredictions();
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

  // usersRef.doc(profile.uid).onSnapshot(function (doc) {
  //   if (!doc) {
  //     console.log(doc.data());
  //   }
  // });



});
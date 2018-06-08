$(document).ready(function () {

  let redirectUrl = "home.html";
  let user = firebase.auth().currentUser;

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

  if (user != null) {
    console.log("user obj" + user);
    user.providerData.forEach(function (profile) {
      // console.log("Sign-in provider: " + profile.providerId);
      // console.log("  Provider-specific UID: " + profile.uid);
      // console.log("  Name: " + profile.displayName);
      // console.log("  Email: " + profile.email);
      // console.log("  Photo URL: " + profile.photoURL);
    });
  }
  // $("#welcome-msg").text(`Welcome ${user.displayName}`);
  $("#welcome-msg").text(`Welcome person`);

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

  // get matches
  wcRef.doc("matches").get()
    .then(function (doc) {
      if (doc.exists) {
        console.log(doc.data());
        $.each(doc.data(), function (group, val) {
          // doc.data().forEach(function (group, val) {
          for (let i = 0; i < val.matches.length; i++) {
            let days = moment(val.matches[i].date).diff(moment(), "days");
            // console.log(days);
            if (days <= rangeLimit && days >= 0) {
              let match = {
                id: val.matches[i].name,
                group: group,
                home_team: val.matches[i].home_team,
                away_team: val.matches[i].away_team,
                home_result: "",
                away_result: "",
                stadium: val.matches[i].stadium,
                type: val.matches[i].type,
                date: val.matches[i].date,
              };
              matches[val.matches[i].name] = match;
              addFixture(match);
            }
          }
        });
        console.log(matches);
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
        console.log(predictions)
      } else {
        $("#confirm-msg").text("Please fill out all predictions and only integers allowed");
        completed = false;
        break;
      }
      if (completed) {
        uploadPredictions();
      }
    }
  });

  // usersRef.doc(profile.uid).onSnapshot(function (doc) {
  //   if (!doc) {
  //     console.log(doc.data());
  //   }
  // });



});
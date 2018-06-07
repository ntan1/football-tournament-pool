$(document).ready(function () {

  let redirectUrl = "home.html";
  let user;

  firebase.auth().onAuthStateChanged(function (user) {
    // user = user;
    if (user) {
      // User is signed in.
      console.log(user);
      $("#welcome-msg").text(`Welcome ${user.displayName}`);
    } else {
      window.location = 'index.html';
  
    }
  });


  db.ref("").on("value", function(snap) {
    console.log(snap.value);
  });

});
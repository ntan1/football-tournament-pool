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
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
    console.log("user obj" + user);
  }
  $("#welcome-msg").text(`Welcome ${user.displayName}`);

  db.ref("/").on("value", function (snap) {
    console.log(snap.val());
  });

  db.ref("/")

});
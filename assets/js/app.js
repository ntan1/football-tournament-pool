$(document).ready(function () {
  // Sign in with reidrect 
  // firebase.auth().signInWithRedirect(provider);
  // firebase.auth().getRedirectResult().then(function (result) {
  //   if (result.credential) {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     let token = result.credential.accessToken;
  //     // ...
  //   }
  //   // The signed-in user info.
  //   let user = result.user;
  //   console.log(user)
  // }).catch(function (error) {
  //   // Handle Errors here.
  //   let errorCode = error.code;
  //   let errorMessage = error.message;
  //   // The email of the user's account used.
  //   let email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   let credential = error.credential;
  //   // ...
  // });

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  };

  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);
});
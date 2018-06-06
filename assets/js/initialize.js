// Initialize Firebase
const config = {
    apiKey: "AIzaSyCJ2QBEtwDJ12gwLI3kKPuCPYnvQdFTatc",
    authDomain: "football-tournament-pool.firebaseapp.com",
    databaseURL: "https://football-tournament-pool.firebaseio.com",
    projectId: "football-tournament-pool",
    storageBucket: "football-tournament-pool.appspot.com",
    messagingSenderId: "528387678821"
};
firebase.initializeApp(config);
db = firebase.database();

// firebase auth
const provider = new firebase.auth.GoogleAuthProvider();
// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());
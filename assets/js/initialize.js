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
// db = firebase.database();
db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

// firebase auth
const provider = new firebase.auth.GoogleAuthProvider();
// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

const tournament = "world-cup-2018";
const users = "users";
const wcRef = db.collection(tournament);
const usersRef = db.collection(users);

let rangeLimit = 10; // display only matches 10 days from now
let matches = [];
let teams = [];
let predictions = [];
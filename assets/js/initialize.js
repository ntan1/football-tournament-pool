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
// fb = firebase.database();

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

// firebase auth
// const provider = new firebase.auth.GoogleAuthProvider();
// Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());

const matches = {
    "groups": {
        "a": {
            "name": "Group A",
            "winner": 4,
            "runnerup": 1,
            "matches": [
                {
                    "name": 1,
                    "type": "group",
                    "home_team": 1,
                    "away_team": 2,
                    "home_result": 5,
                    "away_result": 0,
                    "date": "2018-06-14T18:00:00+03:00",
                    "stadium": 1,
                    "channels": [
                        4,
                        6,
                        13,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 2,
                    "type": "group",
                    "home_team": 3,
                    "away_team": 4,
                    "home_result": 0,
                    "away_result": 1,
                    "date": "2018-06-15T17:00:00+05:00",
                    "stadium": 12,
                    "channels": [
                        3,
                        6,
                        14,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 17,
                    "type": "group",
                    "home_team": 1,
                    "away_team": 3,
                    "home_result": 3,
                    "away_result": 1,
                    "date": "2018-06-19T21:00:00+03:00",
                    "stadium": 3,
                    "channels": [
                        3,
                        6,
                        13,
                        17,
                        15,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 18,
                    "type": "group",
                    "home_team": 4,
                    "away_team": 2,
                    "home_result": 1,
                    "away_result": 0,
                    "date": "2018-06-20T18:00:00+03:00",
                    "stadium": 10,
                    "channels": [
                        3,
                        6,
                        13,
                        17,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 33,
                    "type": "group",
                    "home_team": 4,
                    "away_team": 1,
                    "home_result": 3,
                    "away_result": 0,
                    "date": "2018-06-25T18:00:00+04:00",
                    "stadium": 7,
                    "channels": [
                        4,
                        6,
                        13,
                        18,
                        15,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                },
                {
                    "name": 34,
                    "type": "group",
                    "home_team": 2,
                    "away_team": 3,
                    "home_result": 2,
                    "away_result": 1,
                    "date": "2018-06-25T17:00:00+03:00",
                    "stadium": 8,
                    "channels": [
                        5,
                        6,
                        14,
                        18,
                        15,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                }
            ]
        },
        "b": {
            "name": "Group B",
            "winner": 6,
            "runnerup": 5,
            "matches": [
                {
                    "name": 3,
                    "type": "group",
                    "home_team": 5,
                    "away_team": 6,
                    "home_result": 3,
                    "away_result": 3,
                    "date": "2018-06-15T21:00:00+03:00",
                    "stadium": 11,
                    "channels": [
                        3,
                        7,
                        13,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 4,
                    "type": "group",
                    "home_team": 7,
                    "away_team": 8,
                    "home_result": 0,
                    "away_result": 1,
                    "date": "2018-06-15T18:00:00+03:00",
                    "stadium": 3,
                    "channels": [
                        4,
                        6,
                        13,
                        17,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 19,
                    "type": "group",
                    "home_team": 5,
                    "away_team": 7,
                    "home_result": 1,
                    "away_result": 0,
                    "date": "2018-06-20T15:00:00+03:00",
                    "stadium": 1,
                    "channels": [
                        3,
                        6,
                        14,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 20,
                    "type": "group",
                    "home_team": 8,
                    "away_team": 6,
                    "home_result": 0,
                    "away_result": 1,
                    "date": "2018-06-20T21:00:00+03:00",
                    "stadium": 5,
                    "channels": [
                        4,
                        7,
                        13,
                        15,
                        17,
                        20,
                        21
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 35,
                    "type": "group",
                    "home_team": 8,
                    "away_team": 5,
                    "home_result": 1,
                    "away_result": 1,
                    "date": "2018-06-25T21:00:00+03:00",
                    "stadium": 9,
                    "channels": [
                        3,
                        6,
                        13,
                        18,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                },
                {
                    "name": 36,
                    "type": "group",
                    "home_team": 6,
                    "away_team": 7,
                    "home_result": 2,
                    "away_result": 2,
                    "date": "2018-06-25T20:00:00+02:00",
                    "stadium": 4,
                    "channels": [
                        3,
                        7,
                        14,
                        18,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                }
            ]
        },
        "c": {
            "name": "Group C",
            "winner": 9,
            "runnerup": 12,
            "matches": [
                {
                    "name": 5,
                    "type": "group",
                    "home_team": 9,
                    "away_team": 10,
                    "home_result": 2,
                    "away_result": 1,
                    "date": "2018-06-16T13:00:00+03:00",
                    "stadium": 5,
                    "channels": [
                        3,
                        6,
                        14,
                        15,
                        18,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 6,
                    "type": "group",
                    "home_team": 11,
                    "away_team": 12,
                    "home_result": 0,
                    "away_result": 1,
                    "date": "2018-06-16T19:00:00+03:00",
                    "stadium": 9,
                    "channels": [
                        3,
                        6,
                        14,
                        15,
                        18,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 21,
                    "type": "group",
                    "home_team": 9,
                    "away_team": 11,
                    "home_result": 1,
                    "away_result": 0,
                    "date": "2018-06-21T20:00:00+05:00",
                    "stadium": 12,
                    "channels": [
                        4,
                        6,
                        13,
                        15,
                        18,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 22,
                    "type": "group",
                    "home_team": 12,
                    "away_team": 10,
                    "home_result": 1,
                    "away_result": 1,
                    "date": "2018-06-21T16:00:00+04:00",
                    "stadium": 7,
                    "channels": [
                        4,
                        6,
                        14,
                        15,
                        18,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 37,
                    "type": "group",
                    "home_team": 12,
                    "away_team": 9,
                    "home_result": 0,
                    "away_result": 0,
                    "date": "2018-06-26T17:00:00+03:00",
                    "stadium": 1,
                    "channels": [
                        4,
                        6,
                        13,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                },
                {
                    "name": 38,
                    "type": "group",
                    "home_team": 10,
                    "away_team": 11,
                    "home_result": 0,
                    "away_result": 2,
                    "date": "2018-06-26T17:00:00+03:00",
                    "stadium": 11,
                    "channels": [
                        5,
                        6,
                        14,
                        16,
                        19,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                }
            ]
        },
        "d": {
            "name": "Group D",
            "winner": 15,
            "runnerup": 13,
            "matches": [
                {
                    "name": 7,
                    "type": "group",
                    "home_team": 13,
                    "away_team": 14,
                    "home_result": 1,
                    "away_result": 1,
                    "date": "2018-06-16T16:00:00+03:00",
                    "stadium": 2,
                    "channels": [
                        4,
                        6,
                        13,
                        18,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 8,
                    "type": "group",
                    "home_team": 15,
                    "away_team": 16,
                    "home_result": 2,
                    "away_result": 0,
                    "date": "2018-06-16T21:00:00+02:00",
                    "stadium": 4,
                    "channels": [
                        4,
                        6,
                        14,
                        18,
                        15,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 23,
                    "type": "group",
                    "home_team": 13,
                    "away_team": 15,
                    "home_result": 0,
                    "away_result": 3,
                    "date": "2018-06-21T21:00:00+03:00",
                    "stadium": 6,
                    "channels": [
                        3,
                        6,
                        13,
                        18,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 24,
                    "type": "group",
                    "home_team": 16,
                    "away_team": 14,
                    "home_result": 2,
                    "away_result": 0,
                    "date": "2018-06-22T18:00:00+03:00",
                    "stadium": 8,
                    "channels": [
                        3,
                        6,
                        13,
                        18,
                        15,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 39,
                    "type": "group",
                    "home_team": 16,
                    "away_team": 13,
                    "home_result": 1,
                    "away_result": 2,
                    "date": "2018-06-26T21:00:00+03:00",
                    "stadium": 3,
                    "channels": [
                        3,
                        6,
                        13,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                },
                {
                    "name": 40,
                    "type": "group",
                    "home_team": 14,
                    "away_team": 15,
                    "home_result": 1,
                    "away_result": 2,
                    "date": "2018-06-26T21:00:00+03:00",
                    "stadium": 10,
                    "channels": [
                        3,
                        6,
                        14,
                        17,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                }
            ]
        },
        "e": {
            "name": "Group E",
            "winner": 17,
            "runnerup": 18,
            "matches": [
                {
                    "name": 9,
                    "type": "group",
                    "home_team": 17,
                    "away_team": 18,
                    "home_result": 1,
                    "away_result": 1,
                    "date": "2018-06-17T21:00:00+03:00",
                    "stadium": 10,
                    "channels": [
                        4,
                        6,
                        14,
                        18,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 10,
                    "type": "group",
                    "home_team": 19,
                    "away_team": 20,
                    "home_result": 0,
                    "away_result": 1,
                    "date": "2018-06-17T16:00:00+04:00",
                    "stadium": 7,
                    "channels": [
                        4,
                        6,
                        13,
                        18,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 25,
                    "type": "group",
                    "home_team": 17,
                    "away_team": 19,
                    "home_result": 2,
                    "away_result": 0,
                    "date": "2018-06-22T15:00:00+03:00",
                    "stadium": 3,
                    "channels": [
                        4,
                        6,
                        14,
                        18,
                        15,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 26,
                    "type": "group",
                    "home_team": 20,
                    "away_team": 18,
                    "home_result": 1,
                    "away_result": 2,
                    "date": "2018-06-22T20:00:00+02:00",
                    "stadium": 4,
                    "channels": [
                        3,
                        6,
                        13,
                        18,
                        15,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 41,
                    "type": "group",
                    "home_team": 20,
                    "away_team": 17,
                    "home_result": 0,
                    "away_result": 2,
                    "date": "2018-06-27T21:00:00+03:00",
                    "stadium": 2,
                    "channels": [
                        4,
                        6,
                        13,
                        18,
                        15,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                },
                {
                    "name": 42,
                    "type": "group",
                    "home_team": 18,
                    "away_team": 19,
                    "home_result": 2,
                    "away_result": 2,
                    "date": "2018-06-27T21:00:00+03:00",
                    "stadium": 6,
                    "channels": [
                        5,
                        6,
                        14,
                        18,
                        15,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                }
            ]
        },
        "f": {
            "name": "Group F",
            "winner": 23,
            "runnerup": 22,
            "matches": [
                {
                    "name": 11,
                    "type": "group",
                    "home_team": 21,
                    "away_team": 22,
                    "home_result": 0,
                    "away_result": 1,
                    "date": "2018-06-17T18:00:00+03:00",
                    "stadium": 1,
                    "channels": [
                        3,
                        6,
                        14,
                        18,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 12,
                    "type": "group",
                    "home_team": 23,
                    "away_team": 24,
                    "home_result": 1,
                    "away_result": 0,
                    "date": "2018-06-18T15:00:00+03:00",
                    "stadium": 6,
                    "channels": [
                        4,
                        6,
                        14,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 27,
                    "type": "group",
                    "home_team": 21,
                    "away_team": 23,
                    "home_result": 2,
                    "away_result": 1,
                    "date": "2018-06-23T21:00:00+03:00",
                    "stadium": 11,
                    "channels": [
                        4,
                        6,
                        13,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 28,
                    "type": "group",
                    "home_team": 24,
                    "away_team": 22,
                    "home_result": 1,
                    "away_result": 2,
                    "date": "2018-06-23T18:00:00+03:00",
                    "stadium": 10,
                    "channels": [
                        4,
                        6,
                        13,
                        15,
                        17,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 43,
                    "type": "group",
                    "home_team": 24,
                    "away_team": 21,
                    "home_result": 2,
                    "away_result": 0,
                    "date": "2018-06-27T17:00:00+03:00",
                    "stadium": 5,
                    "channels": [
                        3,
                        6,
                        14,
                        18,
                        15,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                },
                {
                    "name": 44,
                    "type": "group",
                    "home_team": 22,
                    "away_team": 23,
                    "home_result": 0,
                    "away_result": 3,
                    "date": "2018-06-27T19:00:00+05:00",
                    "stadium": 12,
                    "channels": [
                        3,
                        6,
                        13,
                        18,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                }
            ]
        },
        "g": {
            "name": "Group G",
            "winner": 25,
            "runnerup": 28,
            "matches": [
                {
                    "name": 13,
                    "type": "group",
                    "home_team": 25,
                    "away_team": 26,
                    "home_result": 3,
                    "away_result": 0,
                    "date": "2018-06-18T18:00:00+03:00",
                    "stadium": 11,
                    "channels": [
                        3,
                        6,
                        14,
                        17,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 14,
                    "type": "group",
                    "home_team": 27,
                    "away_team": 28,
                    "home_result": 1,
                    "away_result": 2,
                    "date": "2018-06-18T21:00:00+03:00",
                    "stadium": 8,
                    "channels": [
                        3,
                        6,
                        14,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 29,
                    "type": "group",
                    "home_team": 25,
                    "away_team": 27,
                    "home_result": 5,
                    "away_result": 2,
                    "date": "2018-06-23T15:00:00+03:00",
                    "stadium": 2,
                    "channels": [
                        3,
                        6,
                        13,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 30,
                    "type": "group",
                    "home_team": 28,
                    "away_team": 26,
                    "home_result": 6,
                    "away_result": 1,
                    "date": "2018-06-24T15:00:00+03:00",
                    "stadium": 6,
                    "channels": [
                        3,
                        6,
                        14,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 45,
                    "type": "group",
                    "home_team": 28,
                    "away_team": 25,
                    "home_result": 0,
                    "away_result": 1,
                    "date": "2018-06-28T20:00:00+02:00",
                    "stadium": 4,
                    "channels": [
                        4,
                        6,
                        13,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                },
                {
                    "name": 46,
                    "type": "group",
                    "home_team": 26,
                    "away_team": 27,
                    "home_result": 1,
                    "away_result": 2,
                    "date": "2018-06-28T21:00:00+03:00",
                    "stadium": 9,
                    "channels": [
                        5,
                        6,
                        14,
                        19,
                        16,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                }
            ]
        },
        "h": {
            "name": "Group H",
            "winner": 31,
            "runnerup": 32,
            "matches": [
                {
                    "name": 15,
                    "type": "group",
                    "home_team": 29,
                    "away_team": 30,
                    "home_result": 1,
                    "away_result": 2,
                    "date": "2018-06-19T18:00:00+03:00",
                    "stadium": 2,
                    "channels": [
                        4,
                        6,
                        13,
                        18,
                        15,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 16,
                    "type": "group",
                    "home_team": 31,
                    "away_team": 32,
                    "home_result": 1,
                    "away_result": 2,
                    "date": "2018-06-19T15:00:00+03:00",
                    "stadium": 9,
                    "channels": [
                        3,
                        6,
                        14,
                        18,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 1
                },
                {
                    "name": 31,
                    "type": "group",
                    "home_team": 29,
                    "away_team": 31,
                    "home_result": 0,
                    "away_result": 3,
                    "date": "2018-06-24T20:00:00+02:00",
                    "stadium": 5,
                    "channels": [
                        4,
                        6,
                        13,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 32,
                    "type": "group",
                    "home_team": 32,
                    "away_team": 30,
                    "home_result": 2,
                    "away_result": 2,
                    "date": "2018-06-24T18:00:00+03:00",
                    "stadium": 12,
                    "channels": [
                        3,
                        6,
                        13,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 2
                },
                {
                    "name": 47,
                    "type": "group",
                    "home_team": 32,
                    "away_team": 29,
                    "home_result": 0,
                    "away_result": 1,
                    "date": "2018-06-28T17:00:00+03:00",
                    "stadium": 8,
                    "channels": [
                        3,
                        6,
                        14,
                        15,
                        17,
                        20,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                },
                {
                    "name": 48,
                    "type": "group",
                    "home_team": 30,
                    "away_team": 31,
                    "home_result": 0,
                    "away_result": 1,
                    "date": "2018-06-28T18:00:00+04:00",
                    "stadium": 7,
                    "channels": [
                        3,
                        6,
                        13,
                        17,
                        21,
                        22
                    ],
                    "finished": true,
                    "matchday": 3
                }
            ]
        }
    },
    "knockout": {
        "round_16": {
            "name": "Round of 16",
            "matches": [
                {
                    "name": 49,
                    "type": "qualified",
                    "home_team": 4,
                    "away_team": 5,
                    "home_result": 2,
                    "away_result": 1,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": 4,
                    "date": "2018-06-30T21:00:00+03:00",
                    "stadium": 11,
                    "channels": [
                        4,
                        13,
                        15
                    ],
                    "finished": true,
                    "matchday": 4
                },
                {
                    "name": 50,
                    "type": "qualified",
                    "home_team": 9,
                    "away_team": 13,
                    "home_result": 4,
                    "away_result": 3,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": 9,
                    "date": "2018-06-30T17:00:00+03:00",
                    "stadium": 5,
                    "channels": [
                        4,
                        6,
                        13,
                        15
                    ],
                    "finished": true,
                    "matchday": 4
                },
                {
                    "name": 51,
                    "type": "qualified",
                    "home_team": 6,
                    "away_team": 1,
                    "home_result": 1,
                    "away_result": 1,
                    "home_penalty": 3,
                    "away_penalty": 4,
                    "winner": 1,
                    "date": "2018-07-01T17:00:00+03:00",
                    "stadium": 1,
                    "channels": [
                        3,
                        13,
                        15
                    ],
                    "finished": true,
                    "matchday": 4
                },
                {
                    "name": 52,
                    "type": "qualified",
                    "home_team": 15,
                    "away_team": 12,
                    "home_result": 1,
                    "away_result": 1,
                    "home_penalty": 3,
                    "away_penalty": 2,
                    "winner": 15,
                    "date": "2018-07-01T21:00:00+03:00",
                    "stadium": 6,
                    "channels": [
                        4,
                        6,
                        13,
                        15
                    ],
                    "finished": true,
                    "matchday": 4
                },
                {
                    "name": 53,
                    "type": "qualified",
                    "home_team": 17,
                    "away_team": 22,
                    "home_result": 2,
                    "away_result": 0,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": 17,
                    "date": "2018-07-02T18:00:00+04:00",
                    "stadium": 7,
                    "channels": [
                        3,
                        6,
                        14,
                        15
                    ],
                    "finished": true,
                    "matchday": 4
                },
                {
                    "name": 54,
                    "type": "qualified",
                    "home_team": 25,
                    "away_team": 32,
                    "home_result": 3,
                    "away_result": 2,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": 25,
                    "date": "2018-07-02T21:00:00+03:00",
                    "stadium": 10,
                    "channels": [
                        3,
                        6,
                        13,
                        16
                    ],
                    "finished": true,
                    "matchday": 4
                },
                {
                    "name": 55,
                    "type": "qualified",
                    "home_team": 23,
                    "away_team": 18,
                    "home_result": 1,
                    "away_result": 0,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": 23,
                    "date": "2018-07-03T17:00:00+03:00",
                    "stadium": 3,
                    "channels": [
                        4,
                        6,
                        14,
                        16
                    ],
                    "finished": true,
                    "matchday": 4
                },
                {
                    "name": 56,
                    "type": "qualified",
                    "home_team": 31,
                    "away_team": 28,
                    "home_result": 1,
                    "away_result": 1,
                    "home_penalty": 3,
                    "away_penalty": 4,
                    "winner": 28,
                    "date": "2018-07-03T21:00:00+03:00",
                    "stadium": 2,
                    "channels": [
                        3,
                        6,
                        13,
                        15
                    ],
                    "finished": true,
                    "matchday": 4
                }
            ]
        },
        "round_8": {
            "name": "Quarter-finals",
            "matches": [
                {
                    "name": 57,
                    "type": "winner",
                    "home_team": 4,
                    "away_team": 9,
                    "home_result": 0,
                    "away_result": 2,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": 9,
                    "date": "2018-07-06T17:00:00+03:00",
                    "stadium": 6,
                    "channels": [
                        3,
                        14,
                        15
                    ],
                    "finished": true,
                    "matchday": 5
                },
                {
                    "name": 58,
                    "type": "winner",
                    "home_team": 17,
                    "away_team": 25,
                    "home_result": 1,
                    "away_result": 2,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": 25,
                    "date": "2018-07-06T21:00:00+03:00",
                    "stadium": 5,
                    "channels": [
                        3,
                        14,
                        15
                    ],
                    "finished": true,
                    "matchday": 5
                },
                {
                    "name": 59,
                    "type": "winner",
                    "home_team": 1,
                    "away_team": 15,
                    "home_result": 2,
                    "away_result": 2,
                    "home_penalty": 3,
                    "away_penalty": 4,
                    "winner": 15,
                    "date": "2018-07-07T21:00:00+03:00",
                    "stadium": 11,
                    "channels": [
                        4,
                        13,
                        16
                    ],
                    "finished": true,
                    "matchday": 5
                },
                {
                    "name": 60,
                    "type": "winner",
                    "home_team": 23,
                    "away_team": 28,
                    "home_result": 0,
                    "away_result": 2,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": 28,
                    "date": "2018-07-07T18:00:00+04:00",
                    "stadium": 7,
                    "channels": [
                        4,
                        13,
                        16
                    ],
                    "finished": true,
                    "matchday": 5
                }
            ]
        },
        "round_4": {
            "name": "Semi-finals",
            "matches": [
                {
                    "name": 61,
                    "type": "winner",
                    "home_team": 9,
                    "away_team": 25,
                    "home_result": null,
                    "away_result": null,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": null,
                    "date": "2018-07-10T21:00:00+03:00",
                    "stadium": 3,
                    "channels": [
                        4,
                        13,
                        16
                    ],
                    "finished": false,
                    "matchday": 6
                },
                {
                    "name": 62,
                    "type": "winner",
                    "home_team": 15,
                    "away_team": 28,
                    "home_result": null,
                    "away_result": null,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": null,
                    "date": "2018-07-11T21:00:00+03:00",
                    "stadium": 1,
                    "channels": [
                        3,
                        13,
                        15
                    ],
                    "finished": false,
                    "matchday": 6
                }
            ]
        },
        "round_2_loser": {
            "name": "Third place play-off",
            "matches": [
                {
                    "name": 63,
                    "type": "loser",
                    "home_team": 61,
                    "away_team": 62,
                    "home_result": null,
                    "away_result": null,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": null,
                    "date": "2018-07-14T17:00:00+03:00",
                    "stadium": 3,
                    "channels": [
                        4,
                        13,
                        15
                    ],
                    "finished": false,
                    "matchday": 7
                }
            ]
        },
        "round_2": {
            "name": "Final",
            "matches": [
                {
                    "name": 64,
                    "type": "winner",
                    "home_team": 61,
                    "away_team": 62,
                    "home_result": null,
                    "away_result": null,
                    "home_penalty": null,
                    "away_penalty": null,
                    "winner": null,
                    "date": "2018-07-15T18:00:00+03:00",
                    "stadium": 1,
                    "channels": [
                        3,
                        4,
                        13,
                        15
                    ],
                    "finished": false,
                    "matchday": 7
                }
            ]
        }
    }
};

const teams = {
    "teams": [
        {
            "id": 1,
            "name": "Russia",
            "fifaCode": "RUS",
            "iso2": "ru",
            "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/900px-Flag_of_Russia.png",
            "emoji": "flag-ru",
            "emojiString": "🇷🇺"
        },
        {
            "id": 2,
            "name": "Saudi Arabia",
            "fifaCode": "KSA",
            "iso2": "sa",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/750px-Flag_of_Saudi_Arabia.png",
            "emoji": "flag-sa",
            "emojiString": "🇸🇦"
        },
        {
            "id": 3,
            "name": "Egypt",
            "fifaCode": "EGY",
            "iso2": "eg",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/900px-Flag_of_Egypt.png",
            "emoji": "flag-eg",
            "emojiString": "🇪🇬"
        },
        {
            "id": 4,
            "name": "Uruguay",
            "fifaCode": "URU",
            "iso2": "uy",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/900px-Flag_of_Uruguay.png",
            "emoji": "flag-uy",
            "emojiString": "🇺🇾"
        },
        {
            "id": 5,
            "name": "Portugal",
            "fifaCode": "POR",
            "iso2": "pt",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.png",
            "emoji": "flag-pt",
            "emojiString": "🇵🇹"
        },
        {
            "id": 6,
            "name": "Spain",
            "fifaCode": "ESP",
            "iso2": "es",
            "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.png",
            "emoji": "flag-es",
            "emojiString": "🇪🇸"
        },
        {
            "id": 7,
            "name": "Morocco",
            "fifaCode": "MAR",
            "iso2": "ma",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/900px-Flag_of_Morocco.png",
            "emoji": "flag-ma",
            "emojiString": "🇲🇦"
        },
        {
            "id": 8,
            "name": "Iran",
            "fifaCode": "IRN",
            "iso2": "ir",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/630px-Flag_of_Iran.png",
            "emoji": "flag-ir",
            "emojiString": "🇮🇷"
        },
        {
            "id": 9,
            "name": "France",
            "fifaCode": "FRA",
            "iso2": "fr",
            "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.png",
            "emoji": "flag-fr",
            "emojiString": "🇫🇷"
        },
        {
            "id": 10,
            "name": "Australia",
            "fifaCode": "AUS",
            "iso2": "au",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.png",
            "emoji": "flag-au",
            "emojiString": "🇦🇺"
        },
        {
            "id": 11,
            "name": "Peru",
            "fifaCode": "PER",
            "iso2": "pe",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/900px-Flag_of_Peru_%28state%29.png",
            "emoji": "flag-pe",
            "emojiString": "🇵🇪"
        },
        {
            "id": 12,
            "name": "Denmark",
            "fifaCode": "DEN",
            "iso2": "dk",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/740px-Flag_of_Denmark.png",
            "emoji": "flag-dk",
            "emojiString": "🇩🇰"
        },
        {
            "id": 13,
            "name": "Argentina",
            "fifaCode": "ARG",
            "iso2": "ar",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.png",
            "emoji": "flag-ar",
            "emojiString": "🇦🇷"
        },
        {
            "id": 14,
            "name": "Iceland",
            "fifaCode": "ISL",
            "iso2": "is",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.png",
            "emoji": "flag-is",
            "emojiString": "🇮🇸"
        },
        {
            "id": 15,
            "name": "Croatia",
            "fifaCode": "CRO",
            "iso2": "hr",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/800px-Flag_of_Croatia.png",
            "emoji": "flag-hr",
            "emojiString": "🇭🇷"
        },
        {
            "id": 16,
            "name": "Nigeria",
            "fifaCode": "NGA",
            "iso2": "ng",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/800px-Flag_of_Nigeria.png",
            "emoji": "flag-ng",
            "emojiString": "🇳🇬"
        },
        {
            "id": 17,
            "name": "Brazil",
            "fifaCode": "BRA",
            "iso2": "br",
            "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/720px-Flag_of_Brazil.png",
            "emoji": "flag-br",
            "emojiString": "🇧🇷"
        },
        {
            "id": 18,
            "name": "Switzerland",
            "fifaCode": "SUI",
            "iso2": "ch",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/320px-Flag_of_Switzerland_%28Pantone%29.png",
            "emoji": "flag-ch",
            "emojiString": "🇨🇭"
        },
        {
            "id": 19,
            "name": "Costa Rica",
            "fifaCode": "CRC",
            "iso2": "cr",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/833px-Flag_of_Costa_Rica_%28state%29.png",
            "emoji": "flag-cr",
            "emojiString": "🇨🇷"
        },
        {
            "id": 20,
            "name": "Serbia",
            "fifaCode": "SRB",
            "iso2": "rs",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1350px-Flag_of_Serbia.png",
            "emoji": "flag-rs",
            "emojiString": "🇷🇸"
        },
        {
            "id": 21,
            "name": "Germany",
            "fifaCode": "GER",
            "iso2": "de",
            "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.png",
            "emoji": "flag-de",
            "emojiString": "🇩🇪"
        },
        {
            "id": 22,
            "name": "Mexico",
            "fifaCode": "MEX",
            "iso2": "mx",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.png",
            "emoji": "flag-mx",
            "emojiString": "🇲🇽"
        },
        {
            "id": 23,
            "name": "Sweden",
            "fifaCode": "SWE",
            "iso2": "se",
            "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.png",
            "emoji": "flag-se",
            "emojiString": "🇸🇪"
        },
        {
            "id": 24,
            "name": "South Korea",
            "fifaCode": "KOR",
            "iso2": "kr",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/900px-Flag_of_South_Korea.png",
            "emoji": "flag-kr",
            "emojiString": "🇰🇷"
        },
        {
            "id": 25,
            "name": "Belgium",
            "fifaCode": "BEL",
            "iso2": "be",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/450px-Flag_of_Belgium.png",
            "emoji": "flag-be",
            "emojiString": "🇧🇪"
        },
        {
            "id": 26,
            "name": "Panama",
            "fifaCode": "PAN",
            "iso2": "pa",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/450px-Flag_of_Panama.png",
            "emoji": "flag-pa",
            "emojiString": "🇵🇦"
        },
        {
            "id": 27,
            "name": "Tunisia",
            "fifaCode": "TUN",
            "iso2": "tn",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.png",
            "emoji": "flag-tn",
            "emojiString": "🇹🇳"
        },
        {
            "id": 28,
            "name": "England",
            "fifaCode": "ENG",
            "iso2": "gb-eng",
            "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/800px-Flag_of_England.png",
            "emoji": "flag-england",
            "emojiString": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
        },
        {
            "id": 29,
            "name": "Poland",
            "fifaCode": "POL",
            "iso2": "pl",
            "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.png",
            "emoji": "flag-pl",
            "emojiString": "🇵🇱"
        },
        {
            "id": 30,
            "name": "Senegal",
            "fifaCode": "SEN",
            "iso2": "sn",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/900px-Flag_of_Senegal.svg.png",
            "emoji": "flag-sn",
            "emojiString": "🇸🇳"
        },
        {
            "id": 31,
            "name": "Colombia",
            "fifaCode": "COL",
            "iso2": "co",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/450px-Flag_of_Colombia.png",
            "emoji": "flag-co",
            "emojiString": "🇨🇴"
        },
        {
            "id": 32,
            "name": "Japan",
            "fifaCode": "JPN",
            "iso2": "jp",
            "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/900px-Flag_of_Japan.png",
            "emoji": "flag-jp",
            "emojiString": "🇯🇵"
        }
    ]
};

const stadiums = {
    "stadiums": [
        {
            "id": 1,
            "name": "Luzhniki Stadium",
            "city": "Moscow",
            "lat": 55.715765,
            "lng": 37.5515217,
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg"
        },
        {
            "id": 2,
            "name": "Otkrytiye Arena",
            "city": "Moscow",
            "lat": 55.817765,
            "lng": 37.440363,
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Spartak_in_Moscow.jpg"
        },
        {
            "id": 3,
            "name": "Krestovsky Stadium",
            "city": "Saint Petersburg",
            "lat": 59.972740,
            "lng": 30.221408,
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Spb_06-2017_img40_Krestovsky_Stadium.jpg"
        },
        {
            "id": 4,
            "name": "Kaliningrad Stadium",
            "city": "Kaliningrad",
            "lat": 54.698157,
            "lng": 20.533859,
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Kaliningrad_stadium_-_2018-04-07.jpg"
        },
        {
            "id": 5,
            "name": "Kazan Arena",
            "city": "Kazan",
            "lat": 55.820983,
            "lng": 49.160966,
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Kazan_Arena_08-2016.jpg"
        },
        {
            "id": 6,
            "name": "Nizhny Novgorod Stadium",
            "city": "Nizhny Novgorod",
            "lat": 56.337287,
            "lng": 43.963251,
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Nizhny_Novgorod_Stadium_%28March_2018%29.jpg"
        },
        {
            "id": 7,
            "name": "Cosmos Arena",
            "city": "Samara",
            "lat": 53.278146,
            "lng": 50.238854,
            "image": "http://img.fifa.com/image/upload/t_l4/d0mymt1ubl2pypmu3gn3.jpg"
        },
        {
            "id": 8,
            "name": "Volgograd Arena",
            "city": "Volgograd",
            "lat": 48.734195,
            "lng": 44.548345,
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Construction_of_Volgograd_Arena_inside_04.jpg"
        },
        {
            "id": 9,
            "name": "Mordovia Arena",
            "city": "Saransk",
            "lat": 54.181795,
            "lng": 45.203851,
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c9/%D0%A1%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD_Mordovia_arena.jpg"
        },
        {
            "id": 10,
            "name": "Rostov Arena",
            "city": "Rostov-on-Don",
            "lat": 47.209581,
            "lng": 39.738424,
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Rostov-Arens_%28april_2018%29_01.jpg"
        },
        {
            "id": 11,
            "name": "Fisht Olympic Stadium",
            "city": "Sochi",
            "lat": 43.402011,
            "lng": 39.955709,
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Fisht_Stadium_in_January_2018.jpg"
        },
        {
            "id": 12,
            "name": "Central Stadium",
            "city": "Yekaterinburg",
            "lat": 56.832490,
            "lng": 60.573585,
            "image": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Estadio_Central_%28Ekaterinburg-arena%29.jpg"
        }
    ]
};
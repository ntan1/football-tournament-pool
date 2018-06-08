function addFixture(match) {
    let matchDiv = $(`<div class='col-8 match' data-id=${match.id}>`);
    let dateDiv = $("<div class='col-4'>");
    let homePredict = $(`<input type="text" size="2" class="home-result">`).val(predictions[match.id].home_result);
    let awayPredict = $(`<input class="away-result" type="text" size="2">`).val(predictions[match.id].away_result);
    dateDiv.append(`Match starts <span class="match-start-in">${moment(match.date).from(moment())}</span> at `);
    dateDiv.append(`<span class="match-time">${moment(match.date).format("M/D h:mma")}</span>`);
    matchDiv.append(`<label class="home-team">${getTeamName(match.home_team)}</label>${homePredict} vs `);
    matchDiv.append(`${awayPredict}<label class="away-team">${getTeamName(match.away_team)}</label>`);
    $("#predictions").append(matchDiv, dateDiv);
}

function getTeamName(id) {
    return teams[id].name;
}

function uploadPredictions() {
    console.log(user);
    console.log("uid: " + user.providerData[0].uid);
    usersRef.doc(user.providerData[0].uid).get()
        .then(function (snap) {
            if (snap.exists) {
                usersRef.doc(user.providerData[0].uid).update({ predictions: Object.assign({}, predictions) });
                console.log("updated uid");
            } else {
                usersRef.doc(user.providerData[0].uid).set({ name: user.displayName });
                usersRef.doc(user.providerData[0].uid).set({ predictions: Object.assign({}, predictions) });
                console.log("set new uid");
            }
        })
}

function getPredictions(uid) {
    usersRef.doc(uid).get()
        .then(function (snap) {
            if (snap.exists) {
                $.each(snap.data()["predictions"], function (id, val) {
                    console.log("id: " + id + " val: " + val);
                    predictions[id] = val;
                });
                console.log(predictions);
            } else {

            }
        });
}
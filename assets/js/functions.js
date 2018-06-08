function addFixture(match) {
    let matchDiv = $(`<div class='col-8 match' data-id=${match.id}>`);
    let dateDiv = $("<div class='col-4'>")
    dateDiv.append(`Match starts <span class="match-start-in">${moment(match.date).from(moment())}</span> at `);
    dateDiv.append(`<span class="match-time">${moment(match.date).format("M/D h:mma")}</span>`);
    matchDiv.append(`<label class="home-team">${getTeamName(match.home_team)}</label><input type="text" size="2" class="home-result"> vs `);
    matchDiv.append(`<input class="away-result" type="text" size="2"><label class="away-team">${getTeamName(match.away_team)}</label>`);
    $("#predictions").append(matchDiv, dateDiv);
}

function getTeamName(id) {
    return teams[id].name;
}

function uploadPredictions() {
    usersRef.doc(user.providerData[0].uid["predictions"]).update(predictions);
}

function getPredictions(uid) {
    console.log(usersRef.doc(uid).data);
}
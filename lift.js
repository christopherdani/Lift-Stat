//Use client-side solution for now. Use backend later on

$(document).ready(function() {
    var sessionDate = JSON.parse(localStorage.getItem('date'));
    document.title = 'Session: ' + JSON.parse(localStorage.getItem('date'));
    document.getElementById("sessionName").innerHTML = "Session: " + sessionDate;
});
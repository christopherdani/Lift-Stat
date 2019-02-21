/*
    I want to handle sessions here.
    Current idea is to maintain a session object here DURING the session.
    Append to it every time the user clicks "save set"
    Then POST it when the user is finished with the session and clicks "save session"
*/

$(document).ready(function(){
    $('#saveSet').click(function(e){
        
        e.preventDefault();
        $.ajax({
            url: '/sessionSaveSet',
            type: 'post',
            data:$('#ajaxSend').serialize(),
            succes: function() {
                console.log("Set saved successfuly!");
            }
        });
    });
});
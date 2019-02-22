/*
    I want to handle sessions here.
    Current idea is to maintain a session object here DURING the session.
    Append to it every time the user clicks "save set"
    Then POST it when the user is finished with the session and clicks "save session"
*/

// http://james.padolsey.com/javascript/regex-selector-for-jquery/
jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
            matchParams[0].split(':')[0] : 'attr',
            property: jQuery.trim(matchParams.shift().replace(validLabels,''))
        },
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), 'ig');
    return regex.test(jQuery(elem)[attr.method](attr.property));
};

// Update the progress bar.
function updateProgress(exerciseName){
    //TODO next time.
}

$(document).ready(function(){
    // We want to only post the set that we're working on currently. So we need to find out which button was clicked.
    $('input:regex(id, ^saveSet\\d+)').click(function(e){
        var selectedSet = e.target.id;
        var i = -1;
        // Get the index/id of which set we should post.
        // length 8 means saveSet/d
        // length 9 means ssaveSet/d/d
        if (selectedSet == 8){
            i = selectedSet.slice(-1);
        }
        else {
            i = selectedSet.slice(-2);
        }
        e.preventDefault();
        // Now post it.
        $.ajax({
            url: '/sessionSaveSet',
            type: 'post',
            data:$('#ajaxSend' + i).serialize(),
            dataType: 'json',
            success: function(){
                // For some reason, this is not getting called. Not really sure why...
                console.log('test');
            }
        });
    });
});
// Credit to Treps from https://stackoverflow.com/questions/9173182/add-remove-input-field-dynamically-with-jquery
// Profile is at https://stackoverflow.com/users/2156296/treps 
$(document).ready(function() {

    var MaxInputs       = 99; // maximum extra input boxes allowed
    var InputsWrapper   = $("#InputsWrapper"); // input boxes wrapper ID
    var AddButton       = $("#AddMoreFileBox"); // Add button ID
    
    var x = InputsWrapper.length; // initial text box count
    var FieldCount=1; // to keep track of text box added
    
    // on add input button click
    $(AddButton).click(function (e) {
        // max input box allowed
        if(x <= MaxInputs) {
            FieldCount++; // text box added increment
            // add input box
            $(InputsWrapper).append('<div><input name="exercise" type="text" id="field_'+ FieldCount +'" placeholder="Exercise name"/>' + 
            '<input name="set" type="number" placeholder="Set"/>' +
            '<input name="rep" type="number" placeholder="Rep"/>' +
            '<a href="#" class="removeclass"> Remove</a></div>');
            x++; // text box increment

            $("#AddMoreFileId").show();

            $('AddMoreFileBox').html("Add field");

            // 100 fields cap.
            if(x == 99) {
                $("#AddMoreFileId").hide();
                $("#lineBreak").html("<br>");
            }
        }
        return false;
    });
    
    $("body").on("click",".removeclass", function(e){ //user click on remove text
        if( x > 1 ) {
            $(this).parent('div').remove(); //remove text box
            x--; //decrement textbox

            $("#AddMoreFileId").show();

            $("#lineBreak").html("");

            // Adds the "add" link again when a field is removed.
            $('AddMoreFileBox').html("Add field");
        }
        return false;
    }) 
    
    });
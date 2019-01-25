// Credit to Treps from https://stackoverflow.com/questions/9173182/add-remove-input-field-dynamically-with-jquery
// Profile is at https://stackoverflow.com/users/2156296/treps 
$(document).ready(function() {
    var MaxInputs       = 99; //maximum extra input boxes allowed
    var InputsWrapper   = $("#InputsWrapper"); //Input boxes wrapper ID
    var AddButton       = $("#AddMoreFileBox"); //Add button ID
    
    var x = InputsWrapper.length; //Initial count
    var FieldCount=1; //to keep track of text box added
    
    //on add input button click
    $(AddButton).click(function (e) {
        //max input box allowed
        if(x <= MaxInputs) {
            FieldCount++; //text box added ncrement
            //add input box
            $(InputsWrapper).append('<div><input type="text" id="field_'+ FieldCount +'" placeholder="Exercise name"/>' + 
                '<input type="number" placeholder="Set"/>' +
                '<input type="number" placeholder="Rep"/>' +
                '<a href="#" class="removeclass"> Remove</a></div>');
            x++; //text box increment
            
            $("#AddMoreFileId").show();
            
            // Limit
            if(x == 100) {
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
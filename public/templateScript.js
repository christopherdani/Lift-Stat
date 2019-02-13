/*
Each "box", that is, input fields groups (constists of exercise name, sets, reps), are identified with a box number in its class: box<number>
Keep track of which boxes exists in the "tracker" array.
Maximum 20 boxes.
As long as we have unique numbers as identifiers, we're cool. We can sort it later on.
This is needed so that we can identify the fields and represent it in the model properly.
*/
$(document).ready(function() {

    var MaxInputs       = 19; // Maximum extra input boxes allowed
    var InputsWrapper   = $("#InputsWrapper"); // Input Boxes wrapper ID
    var AddButton       = $("#AddMoreFileBox"); // Add button ID
    
    var x = InputsWrapper.length; // Initial text box count
    var boxCount = 1; // Keep track of which index should be added
    var tracker = [1]; // Only increment with missing index
    
    /* 
    Only increment the box number if every box number inclusive from 1 to tracker.length + 1 exists.
    Otherwise, replace the deleted boxes numbers first. These are marked with a 0 in the tracker array.
    */
    $(AddButton).click(function (e) {
        if(x <= MaxInputs) {
            var flag = tracker.indexOf(0);
            if (flag == -1){
                boxCount = tracker.length;
                boxCount++;
                tracker.push(boxCount);
            }
            else {
                boxCount = flag + 1;
                tracker.splice(flag, 1, boxCount);
            }
            
            // Add input box
            $(InputsWrapper).append('<div class="box' + boxCount + '" ><input name="exercise' + boxCount + '" type="text" id="field_'+ boxCount +'" placeholder="Exercise name"/>' + 
            '<input name="set' + boxCount + '"type="number" placeholder="Set"/>' +
            '<input name="rep' + boxCount + '"type="number" placeholder="Rep"/>' +
            '<a href="#" class="removeclass"> Remove</a></div>');
            x++; // text box increment

            $("#AddMoreFileId").show();

            $('AddMoreFileBox').html("Add field");

            // fields cap.
            if (x == 20) {
                $("#AddMoreFileId").hide();
                $("#lineBreak").html("<br>");
            }
        }
        console.log(tracker);
        return false;
    });
    
    /*
    Replace the box-to-be-deleted's number with a 0 in the tracker array.
    This is so we can replace it with a new one in case we add to it later on.
    */
    $("body").on("click",".removeclass", function(e){
        if( x > 1 ) {
            // Get the box number that is to be deleted.
            var box = $(this).parent('div').attr('class');
            var box_number = box[box.length - 1];
            
            // Replace the corresponding number in tracker array and mark it as 0.
            tracker = tracker.map(val => val == box_number ? 0 : val);

            $(this).parent('div').remove(); //remove text box
            console.log(tracker);
            x--; //decrement textbox
            boxCount--;
            $("#AddMoreFileId").show();

            $("#lineBreak").html("");

            // Adds the "add" link again when a field is removed.
            $('AddMoreFileBox').html("Add field");
        }
        
        return false;
    }) 
    
});
$(document).ready(function(){
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4',
        size: 'small',
        onSelect: function(dateText, inst) {
            $('#datepick').submit();
        }
    })
});
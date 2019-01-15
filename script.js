function submitDate(){
    console.log($('#datepicker-small').val());
    window.location.href = 'exercises.html';
}

function addEntry(){
    $('.entry').append(`
    <div class="form-row">
        <div class="col.auto">
            <input type="text" class="form-control" placeholder="Exercise name">
        </div>
        <div class="col.auto">
            <input type="number" class="form-control" placeholder="Set">
        </div>
        <div class="col.auto">
            <input type="number" class="form-control" placeholder="Rep">
        </div>
    </div>`)
}
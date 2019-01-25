function submitDate(){
    console.log($('#datepicker').val());
    localStorage.setItem('date', JSON.stringify($('#datepicker').val()));
    window.location.href = 'lift.html';
}
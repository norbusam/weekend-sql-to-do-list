console.log('JS loaded');

$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded');
    $('#addTask').on('click', addTask);
}// end onReady

function addTask(){
    console.log('task added');
    let task = $('#taskIn').val();
    console.log('task to be added', task);
}
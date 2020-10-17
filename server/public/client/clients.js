console.log('JS loaded');

$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded');
    $('#addTask').on('click', addTask);
    getTask();
}// end onReady

function addTask(){
    console.log('task added');
    let task = $('#taskIn').val();
    console.log('task to be added', task);
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: task
    }).then(function(response){
        console.log('back from server POST', response);
        // getTask();
    }).catch(function(err){
        console.log('error in POST server', error);
    })
}// end addTask

function getTask(){
    let el = $('#taskOutput');
    //Clear the dom 
    // el.empty();
    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then(function(response){
        console.log('back from server GET', response);
        for (let task of response) {
            el.append(`
                <tr>
                    <td>${task.name}</td>
                    <td>${task.description}</td>
                    <td><input type="checkbox" id="completed" value=${task.completed}/></td>
                    <td><button class="deleteBtn">Delete</button></td>
                </tr>
            `);
        }//end loop
    }).catch(function(err){
        console.log('error in GET server', error);
    })
}
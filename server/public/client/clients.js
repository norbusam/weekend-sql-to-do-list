console.log('JS loaded');

$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded');
    $('#addTask').on('click', addTask);
    $('#taskOutput').on('click', '.deleteBtn', deleteTask);
    $('#taskOutput').on('click', '.completed', completeTask);
    getTask();
}// end onReady
//Post routes
function addTask(){
    //Validation
    if($('#nameIn').val() == '' || $('#descriptionIn').val() == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill out task and description'
          })
        return false;
    }
    console.log('task added');
    let task = {
        name: $('#nameIn').val(),
        description: $('#descriptionIn').val()
    }
    console.log('task to be added', task);
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: task
    }).then(function(response){
        console.log('back from server POST', response);
        getTask();
    }).catch(function(err){
        console.log('error in POST server', error);
    })//end ajax
    //empty the input fields
    $('#nameIn').val('');
    $('#descriptionIn').val('');
}// end addTask
//PUT routes
function completeTask(){
    let taskId = $(this).closest('tr').data('id');
    let completedTask = $(this).data('complete')
    console.log('complete with the id of:', taskId);
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskId}`,
        data: {
            completed: completedTask
        }
    }).then(function(response){
        console.log('back from PUT', response);
        getTask();
    }).catch(function(err){
        console.log('error getting in PUT serer', err);
    });//end ajax
}// end completeTask
//Delete
function deleteTask() {
    let taskId = $(this).closest('tr').data('id');
    console.log('deleted with the id of:', taskId);
    Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            showLoaderOnConfirm: true,
    
    preConfirm: function() {
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}`
    }).then(function(response){
        console.log('back from DELETE', response);
        getTask();
    }).catch(function(err){
        console.log('error getting in DELETE serer', err);
    
    })//end ajax  
}
})// end swal 
}//end deleteTask
//GET
function getTask(){
    let el = $('#taskOutput');
    //Clear the dom 
    el.empty();
    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then(function(response){
        console.log('back from server GET', response);
        for (let task of response) {
            if(`${task.completed}` == 'false'){
            el.append(`
                <tr data-id=${task.id}>
                    <td>${task.name}</td>
                    <td>${task.description}</td>
                    <td><input data-complete=${task.completed} type="checkbox" class="completed" value=${task.completed}/></td>
                    <td><button class="deleteBtn">Delete</button></td>
                </tr>
            `);} else {
                el.append(`
                    <tr class="done" data-id=${task.id}>
                        <td>${task.name}</td>
                        <td>${task.description}</td>
                        <td><p>Completed</p></td>
                        <td><button class="deleteBtn btn btn-light">Delete</button></td>
                    </tr>
            `);
            }
        }//end loop
    }).catch(function(err){
        console.log('error in GET server', error);
    })//end ajax
}//end getTask
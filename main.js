$(document).ready(function(){
    $('#taskForm').on('submit', function(event){
        event.preventDefault();
        
        var taskName = $('#taskInput').val();
        var newTask = $('<li>').text(taskName);
        $('#taskList').append(newTask);
        $('#taskInput').val('');
        
        $('#taskList').on('click', 'li', function(){
            $(this).toggleClass('completed');
        });
    });

    $('#clearList').on('click', function(){
        $('#taskList').empty();
    });
});
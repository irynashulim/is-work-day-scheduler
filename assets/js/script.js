//todays date on the top of the page
var currentDay = moment().format('LLL');
$("#currentDay").append(currentDay);



var schedule = JSON.parse(localStorage.getItem('schedule')) || [];


function renderTodos(schedule) {
    $('#to-dos').empty();

// Iterates over the 'list'
for (var i = 0; i < schedule.length; i++) {
    
    var scheduleItem = $('<p>');
    scheduleItem.text(schedule[i]);

    var scheduleSave = $('<button>');
    scheduleSave.attr('schedule-to-do', i);
    scheduleSave.addClass('save');

scheduleItem = scheduleItem.prepend(scheduleSave);

$('#to-dos').append(scheduleItem);
}
}
$('#checkbox').on('click', function(event) {
    event.preventDefault();

        var toDo = $(".input-box")
        .val()
        .trim();

        schedule.push(toDo);

        for ( i = 0; i<schedule.length; i++) {
            var item = schedule[i];
          };
          renderTodos(schedule);

        var task = JSON.stringify(schedule);
        localStorage.setItem("schedule", task);
      });

      $(document).on('click', '.save', function() {
        var itemId = $(this).attr('schedule-to-do')
        schedule.splice(itemId, 1);
        renderTodos(schedule);
        localStorage.setItem("schedule", JSON.stringify(schedule));
      });

      renderTodos(schedule);
    
      

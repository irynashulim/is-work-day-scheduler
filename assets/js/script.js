//todays date on the top of the page
var currentDay = moment().format('LLL');
$("#currentDay").append(currentDay);

// time for task table
var nineAm = moment("2021-06-03 9:00").format("h a");
$("#nine-am").append(nineAm);

var tenAm = moment("2021-06-03 10:00").format("h a");
$("#ten-am").append(tenAm);

// create task input
var tasks = {}; 

var createTask = function(taskText) {
    var taskP = $("<p>")
    .addClass("p-text")
    .text(taskText);

$("#task-9am").append(taskP);
}
// save tasks
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };


//todays date on the top of the page
var currentDay = moment().format('LLL');
$("#currentDay").append(currentDay);

var list = JSON.parse(localStorage.getItem('todolist')) || [];

// Renders our to-dos to the page
function renderTodos(list) {
    // Empties out the html
    $('#to-dos').empty();

// Iterates over the 'list'
for (var i = 0; i < list.length; i++) {
    // Creates a new variable 'toDoItem' that will hold a "<p>" tag
    // Sets the `list` item's value as text of this <p> element
    var toDoItem = $('<p>');
    toDoItem.text(list[i]);

    // Creates a button `toDoClose` with an attribute called `data-to-do` and a unique `id`
    var toDoSave = $('<button>');
    toDoSave.attr('data-to-do', i);

// Adds the button to the `toDoItem`
toDoItem = toDoItem.prepend(toDoSave);

// Adds 'toDoItem' to the To-Do List div
$('#to-dos').append(toDoItem);
}
}
$('#checkbox').on('click', function(event) {
    event.preventDefault();

// Get the to-do "value" from the textbox and store it as a variable using `.val()` and `.trim()`
        // YOUR CODE HERE
        var toDo = $(".input-box")
        .val()
        .trim();
        console.log(toDo);

        // Add the new to-do to our local 'list' variable
        // YOUR CODE HERE
        list.push(toDo);
        console.log(list)

        // Update the to-dos on the page
        // YOUR CODE HERE
        for (i = 0; i<list.length; i++) {
            var item = list[i];
          };
          renderTodos(list);

          // Save the to-dos into localStorage
        // We need to use JSON.stringify to turn the list from an array into a string
        // YOUR CODE HERE
        var task = JSON.stringify(list);
        localStorage.setItem("todolist", task);
    });



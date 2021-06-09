$(document).ready(function () {

  //todays date on the top of the page
  var currentDay = moment().format('LLL');
  $("#currentDay").append(currentDay);
  var time = moment().format("HH");

  //events for the schedule
  var events = ["", "", "", "", "", "", "", "", ""];
  var schedule = $(".container");

  //get events from local storage
  if (localStorage.getItem("events")) {
    events = JSON.parse(localStorage.getItem("events"));
  }

  // changing colors for past, current and future time
  for (var i = 0; i < 9; i++) {
    var color
    if (time == i + 8) {
      color = "present";
    } else if (time < i + 8) {
      color = "future";
    } else {
      color = "past";
    }
    // creating row and colons for the schedule
    var scheduleRow = $("<div class='row hour'></div>");
    var timeSection = $("<div class='col-2 time-block'></div>");
    var scheduleSection = $("<div class='col-8'></div>");
    var btnSection = $("<div class='col-2'></div>");

    //timeSection
    timeSection.text(convertTime(i + 8));
    //scheduleSection
    var textArea = $("<textarea class='form-control textarea' aria-label='With textarea'></textarea>");
    textArea.attr("id", i + "_textarea");
    textArea.val(events[i]);
    textArea.addClass(color);
    scheduleSection.append(textArea);
    //btnSection
    var saveBtn = $("<button type='button' class='saveBtn'></button'>");
    saveBtn.text("Save");
    saveBtn.attr("id", i);
    saveBtn.click(function (event) {
      save(event);
    });
    btnSection.append(saveBtn);
    scheduleRow.append(timeSection);
    scheduleRow.append(scheduleSection);
    scheduleRow.append(btnSection);
    schedule.append(scheduleRow);

    //functions 
    //save() function
    function save(event) {
      var id = event.target.id;
      var text = $("#" + id + "_textarea").val();
      events[id] = text;
      console.log(events);
      // saving to local storage
      localStorage.setItem("events", JSON.stringify(events));
    }

    function convertTime(hour) {
      if (hour > 12) {
        var milHour = hour - 12;
        return milHour + "pm";
      } else {
        return hour + "am";
      }
    }
  }
});


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveDate = document.querySelector('#hour-9')

//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


//$(saveDate).append(time); */

//pasteText();
  /*console.log(localStorage.getItem('time'));

  var input = document.getElementById('hour-9');
  localStorage.setItem('server', input);

  saveDate === localStorage.getItem('server');

  var storedValue = localStorage.getItem("server"); */

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  window.onload = function(){
    applyColor();
  }


// var timeStamp = 11
var timeStamp = dayjs().format('HH')

function applyColor (){
  if (timeStamp > 9){
    $('#hour-9').addClass('past');
  } else if (timeStamp >= 9 && timeStamp < 10){
    $('#hour-9').addClass('present');
  } else if (timeStamp < 9){
    $('#hour-9').addClass('future');
  }
  if (timeStamp > 10){
    $('#hour-10').addClass('past');
  } else if (timeStamp >= 10 && timeStamp < 11){
    $('#hour-10').addClass('present');
  } else if (timeStamp < 10){
    $('#hour-10').addClass('future');
  }

  if (timeStamp > 11){
    $('#hour-11').addClass('past');
  } else if (timeStamp >= 11 && timeStamp < 12){
    $('#hour-11').addClass('present');
  } else if (timeStamp < 11){
    $('#hour-11').addClass('future');
  }

  if (timeStamp > 12){
    $('#hour-12').addClass('past');
  } else if (timeStamp >= 12 && timeStamp < 13){
    $('#hour-12').addClass('present');
  } else if (timeStamp < 12){
    $('#hour-12').addClass('future');
  }

  if (timeStamp > 13){
    $('#hour-13').addClass('past');
  } else if (timeStamp >= 13 && timeStamp < 14){
    $('#hour-13').addClass('present');
  } else if (timeStamp < 13){
    $('#hour-13').addClass('future');
  }

  if (timeStamp > 14){
    $('#hour-14').addClass('past');
  } else if (timeStamp >= 14 && timeStamp < 15){
    $('#hour-14').addClass('present');
  } else if (timeStamp < 14){
    $('#hour-14').addClass('future');
  }

  if (timeStamp > 15){
    $('#hour-15').addClass('past');
  } else if (timeStamp >= 15 && timeStamp < 16){
    $('#hour-15').addClass('present');
  } else if (timeStamp < 15){
    $('#hour-15').addClass('future');
  }

  if (timeStamp > 16){
    $('#hour-16').addClass('past');
  } else if (timeStamp >= 16 && timeStamp < 17){
    $('#hour-16').addClass('present');
  } else if (timeStamp < 16){
    $('#hour-16').addClass('future');
  }

  if (timeStamp > 17){
    $('#hour-17').addClass('past');
  } else if (timeStamp >= 17 && timeStamp < 18){
    $('#hour-17').addClass('present');
  } else if (timeStamp < 17){
    $('#hour-17').addClass('future');
  }

  if (timeStamp > 18){
    $('#hour-18').addClass('past');
  } else if (timeStamp >= 18 && timeStamp < 19){
    $('#hour-18').addClass('present');
  } else if (timeStamp < 18){
    $('#hour-18').addClass('future');
  }

}
/*$(document).ready(function (pastClass) {
  if (morning < 10) {
    $(".description").addClass("past");
    }
  })


  $(document).ready(function (pastClass) {
    if (morning > 12) {
      $(".description").addClass("future");
      }
    })  */

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


//});
applyColor();

var currentDay = dayjs().format('MM/DD/YYYY')
$('#currentDay').append(currentDay);


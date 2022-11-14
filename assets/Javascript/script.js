  // Worked with a tutor to implement this. On clicking the 'save button', the users input is saved into the var userInput
  // the var checks the sibling element for the 'description' class and saves the input. All of this was done with Jquery

  $( ".saveBtn" ).on( "click", function() {
    var userInput = $(this).siblings(".description").val();
    var userOutput = $(this).parent().attr('id'); 
    console.log(userInput, userOutput);
    localStorage.setItem(userOutput, userInput);
  });

// This grabs the items from local storage for each ID and displays what was saved after refreshing the page. 
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
 
var timeStamp = dayjs().format('HH') //formats the time into a 24 hour integer from which the class will be applied based on what time it is. 
// the function applyColor uses else if statements to apply the correct class color based on the time of day using dayjs
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
//this runs the function to apply the different colored classes we assigned
// in the HTML
applyColor();

// Day.js was used to display the current day/month/year at the top of the page. 
var currentDay = dayjs().format('MM/DD/YYYY')
$('#currentDay').append(currentDay);


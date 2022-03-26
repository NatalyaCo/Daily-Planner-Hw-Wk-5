let timeNow = moment().format('dddd, MMMM Do YYYY');
let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;


$('#currentDay').append(timeNow);

colorChanguing();

function colorChanguing() {

  Timer = setInterval(colorChanguing, 1000);
  
  if(hourNow24 >= 9 && hourNow24 <= 17) {

    for (let i =1; i<=9 ; i++) { 
     let hourInInt = parseInt($('#time'+i).text());

      if (hourInInt < 9) {
        hourNow = hourInInt + 12;
      }
      
      if (hourInInt == hourNow24) {
        $('#text'+i).css('background-color', '#FB8F78');
        continue;
      }
      
      if (hourInInt < hourNow24) {
        $('#text'+i).css('background-color', 'lightgray');
      } 
      else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
    }

  }
  else {
    clearInterval(Timer);
    $('textarea').css('background-color', 'teal');
  }
}

let timeNow = moment().format('dddd, MMMM Do YYYY,  h:mm:ss a');
let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;

//function showTime() {
    //var timeShow = document.querySelector ("#currentDay")
//}
//showTime ();


// var notesRow = document.getElementById ("#hourNotes")

// var futureTime 
// var pastTime 

//  console.log (timeNow);


// function ColorChange (){

// if (timeNow) {
//    $("#hourNotes").css("backgoruund-color", "#ff6961");
// }
// if (pastTime < timeNow) {
//     $("#hourNotes").css("background-color", "#d3d3d3");
//  }
// if (futureTime < timeNow){
//     $("#hourNotes").css("background-color", "#77dd77");

// }    

   
// }
// ColorChange ();

// var currentD = new Date();
// var startWorkHoursD = new Date();
// startWorkHoursD.setHours(9,00,0); // 9.00 am
// var endWorkHoursD = new Date();
// endWorkHoursD.setHours(17,00,0); // 5.00 pm
// var colorField = document.querySelector ("hourNotes");



// console.log(timeNow)


// if(currentD >= startWorkHoursD && currentD < endWorkHoursD ){
//     $("#hourNotes").css("background-color", "#d3d3d3");
//     console.log("past");
// }else{
//     $("#hourNotes").css("background-color", "#77dd77");
//     console.log("future");
// }



$('#currentDay').append(timeNow);

var formSubmitHandler = function (event) {
    event.preventDefault();
}

if (window.localStorage) {

    var txthourNotes = document.getElementById ('hourNotes'); 
    var txt09AM = document.getElementById ('#09AM');

    txthourNotes.value = localStorage.getItem ('hourNotes');
    txt09AM.value = localStorage.getItem ('#09AM');

    txthourNotes.addEventListener('input', function ( ) {
 localStorage.setItem('hourNotes', txthourNotes.value);

    }, false);


}

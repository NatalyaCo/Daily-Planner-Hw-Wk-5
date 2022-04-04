

var timeNow = moment().format("lll");
var displayTimem = document.querySelector("#time-display");
var colorNotes = document.querySelector(".hourNotes");
var timeBlocks = ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
var militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

displayTimem.textContent = timeNow


var colorNotes = function (arr) {
  for (var i = 0; i < timeBlocks.length; i++) {
    var currentNumber = timeBlocks[i];
    var timeNow = militaryTime[i];
    var currentTime = moment().hour()
    $("#"+timeBlocks[i]).val(localStorage.getItem(timeBlocks[i]))

    if (currentTime > timeNow) {
      $("#" + timeBlocks[i]).addClass("past");

    } else if (currentTime < timeNow) {
      $("#" + timeBlocks[i]).addClass("future");

    } else if (currentTime === timeNow) {
      $("#" + timeBlocks[i]).addClass("present");

    } else {
      console.log(currentNumber);
    }
  }
};
colorNotes()

$(".saveBtn").on("click", function () {
  var dataId = $(this).attr("data-id")
  var text = $("#"+ dataId).val()
  localStorage.setItem(dataId, text)
})

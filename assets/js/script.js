var hoursInday = {
    morning: ["12AM", "01AM", "02AM","03AM", "04AM","05AM", "06AM","07AM", "08AM",],
    business: ["09AM", "10AM", "11AM", "12PM", "01PM", "02PM","03PM","04PM","05PM","06PM", ],
    night: ["07PM","08PM","09PM","10PM","11PM","12AM",]

};

function displayTime() {
    var rightNow = moment().format ('MMMM Do YYYY, h:mm:ss a')
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);
colorChange();

function colorChange() {
    presentTime = moment().format("hhA");
    console.log(presentTime);

    if (hoursInday.morning.indexOf(presentTime)  {
    night.indexOf(presentTime) !==-1; {
        $(".hourNotes").css("background-color",)
        console.log("Boom");

    }
    if (hoursInday.business.indexOf(presentTime)  {
        $("#"+presentTime).css("background-color",)
    }
    for (var i=o; i<hoursInday.business.indexOf(presentTime)
    
}
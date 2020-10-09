function Time_Function() { // this is the time function from the previous pages
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { // if else statments
        Reply = "It's morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It's the evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
    }

var global = new Date(); // global variable
function fullYear() {
    var year = (global.getFullYear() + " is the year!"); // local variable this is also where i used the console to debug 
    document.getElementById("dateYear").innerHTML = year; // and issue saying the variable was null
}

fullYear();
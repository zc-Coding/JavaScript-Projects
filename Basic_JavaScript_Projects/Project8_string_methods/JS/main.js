// NEW Code 
function countdown() { // initial input of seconds by user
    var seconds = document.getElementById("seconds").value;

    function tick() { // counting down function
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1){ 
        alert("Time's up!"); // end of counting function
    }
        }
        tick(); // calls counting function
}
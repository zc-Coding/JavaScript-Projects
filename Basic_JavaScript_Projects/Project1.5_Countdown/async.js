function countdown() {
    var seconds = document.getElementById("startTime").value;

    function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    setTimeout(tick, 1000);
if(seconds == -1){
    alert("times up!");

    }
     
        }
tick();       
}

function count_to_ten() {
    var digit = " ";
    var X = 1;
    while (X < 11) {
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = digit;
}

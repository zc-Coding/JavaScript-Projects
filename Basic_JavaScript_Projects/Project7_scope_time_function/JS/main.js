function myNumFunc() {
    if (document.getElementById("num") < 25) {
    document.getElementById("response").innerHTML = "Add more units please";
    }
    else {
        document.getElementById("response").innerHTML = "It's too big now... sad";
    }
}


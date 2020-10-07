function myAddFunc() { //Addition Function
    var x = 7;
    var y = 18;
    var answer = (x+y)
    return document.getElementById("Add").innerHTML = answer;
}

function mySubFunc() { //Subtraction Function
    var x = 7;
    var y = 18;
    var answer = (x-y)
    return document.getElementById("Sub").innerHTML = answer;
}

function myMultiplyFunc() { // Multiplacation Function
    var x = 7;
    var y = 18;
    var answer = (x*y)
    return document.getElementById("Multi").innerHTML = answer;
}

function myModulosFunc() { // Modolus Function
    var x = 7;
    var y = 18;
    var answer = (y%x)
    return document.getElementById("Mod").innerHTML = answer;
}

function myIncrementFunc() { // Increment Function
    var x = 7;
    x++;
    return document.getElementById("Inc").innerHTML = x;
}

function myDecrementFunc() { // Decrement Function
    var y = 18;
    y--
    return document.getElementById("Dec").innerHTML = y;
}

window.alert(Math.random() * 50); // Use of random function with parameter between 0 and 50
function typeOf() { // function using the document write and type of
    document.write(typeof true);
}

function concatenate() { // concatenation of a string and a number in the style of family feud
    var str = "Your sister-in-law ";
    var answer = str + 42;
    document.getElementById("concat").innerHTML = answer;
}

function myFunc1() { // double equal operand
    document.getElementById("func1").innerHTML = (8 == 8);
}

function myFunc2() { // triple equal operand
    document.getElementById("func2").innerHTML = (4 === "four");
}

function myFunc3() { // a console log of a greater than function
    console.log(90 > 2);
}

function myFunc4() { // less than comparison
    document.getElementById("func4").innerHTML = (3 < 3);
}

function myFunc5() { // the AND operand
    document.getElementById("func5").innerHTML = (4 > 3 && 10 == 10);
}

function myFunc6() { // the OR operand
    document.getElementById("func6").innerHTML = (6 > 6 || 6 > 6);
}

function myFunc7() { // the NOT operand and i also through in an infinity for fun
    document.getElementById("func7").innerHTML = !(3.336756 > (0/0));
}
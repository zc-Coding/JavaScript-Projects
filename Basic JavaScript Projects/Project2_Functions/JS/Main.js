function myFirstFunc() { //function used just for an example
    var str = "this is green text!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}
myFirstFunc();


function myMathFunc() {// this is a math expression
    var num1 = 5;
    var num2 = 5;
    var answer = (num1 * num2);
    document.getElementById("answerReturn").innerHTML = answer;
}
myMathFunc()

function myFunction() { //function that concatenates two string using += operator
    var sentence = "I am Learning";
    sentence += " a lot from this book";
    document.getElementById("Concatenate").innerHTML = sentence;
}
myFunction()
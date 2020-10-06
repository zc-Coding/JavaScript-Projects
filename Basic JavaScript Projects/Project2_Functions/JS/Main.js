function myFirstFunc() {
    var str = "this is green text!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}
myFirstFunc();
// add math expression here 

function myMathFunc() {
    var num1 = 5;
    var num2 = 5;
    var answer = (num1 * num2);
    document.getElementById("answerReturn").innerHTML = answer;
}
myMathFunc()

function pressYourLuck() { // this is my for loop which inputs condtions for a loop
for (i = 0; i < 10; i++){ // loop conditions
        console.log("Big money"); // the function to be preformed
} 
}

function priceIsRight() { // the use of a while loop which is just another way to creat a similar loop to the for
    var i = 0; // the syntax is just different and you put your loop parameters on differnt lines of code
    while (i < 10) { // stop condition
       i++; // counting condition
       document.getElementById("bob").innerHTML = ("numbers " + i); // a landing place for the output
   }
}

function arrayFunc() { // creation of an array
    var colorArray = []; // telling the computer it will be an array
    colorArray[0] = "Red"; // values for array with the index indicated so the computer knows where to put it
    colorArray[1] = "Blue";
    colorArray[2] = "Purple";
    colorArray[3] = "White";
    colorArray[4] = "Yellow";
    document.getElementById("colors").innerHTML = colorArray; // html output of my array
}
arrayFunc(); // the calling of the array function because i was sick of doing buttons


// KEPT IT TO USE AS A REFERENCE

// function Call_Loop() {
//    var counter = 0;
//    var result = " ";
//    while(counter < 25){
//    counter += 5;
//    result = counter + "!";
//    }
//    console.log(result);
//}
//
//var Instruments = ["Guitar", "Drums", "Base", "Keyboard", "Saxaphone"];
//var Content = "";
//var Y;
//function for_Loop() {
//    for (Y = 0; Y < Instruments.length; Y++) {
//        Content += Instruments[Y] + "<br>";
//    }
//    document.getElementById("List_of_Instruments").innerHTML = Content;
//}
//
//function array_Function() {
//    var colorArray = [];
//    colorArray[0] = "Red";
//    colorArray[1] = "Blue";
//    colorArray[2] = "Green";
//    colorArray[3] = "Brown";
//    document.getElementById("Array").innerHTML = colorArray;
//}
//
//function constant_function() {
//    const number_letter = {0:"A", 1:"B", 2:"C", 3:"D"};
//    document.getElementById("Constant").innerHTML = number_letter[2];
//    number_letter[3] = "F";
//    console.log(number_letter[3]);
//    number_letter[4] = "E"; 
//    console.log(number_letter[4]);
//}
//
//var X = 4;
//var B = 21;
//
//function add(n1, n2) {
//    return (n1 + n2);
//}
//
//
//console.log(add(X, B));
//
//let beer = {
//    brewery: "Squatters",
//    style: "Pilsner",
//    name: "Touchdown beer",
//    score: "8/10",
//    statement : function() {
//        return "this beer is a " + this.style + " from " + this.brewery + " in the " + this.style + " style and it got a " + this.score + " from the beer lovers asscoiation of the lower eastern Wisconsin region.";
//    }
//};
//document.getElementById("objectStatement").innerHTML = beer.statement();
//
function myConcat() { //use of the concat function displays in html
    var part1 = "the concat ";
    var part2 = "is putting these ";
    var part3 = "strings ";
    var part4 = "together.";
    var sentence = part1.concat(part2, part3, part4);
    document.getElementById("string").innerHTML = sentence;
}

function mySlice() { // use of the slice function with two parameters displays in the console
    var X = "this will be the victim of the slicing.";
    var Y = X.slice(4,15);
    console.log(Y);
}

function myDouble() { 
    var P = 5439/95.5;
    console.log(P);
    var G = P.toPrecision(4);
    var V = G.toString();
    document.getElementById("stringer").innerHTML = V;
}

myDouble();
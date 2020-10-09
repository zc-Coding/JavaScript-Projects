function nestedFunction() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var startingNum = 0;
        function addFive() {startingNum += 5;}
        addFive();
        return startingNum;
    }
}

function drinkingAge() {
    var Age, Can_drink;
    Age = document.getElementById("Age").value;
    Can_drink = (Age < 21) ? "You are too young":"You are old enough";
    document.getElementById("oldenough").innerHTML = Can_drink + " to drink.";
}

function myPets(Species, Name, Age, Cuteness) {
    this.pets_species = Species;
    this.pets_name = Name;
    this.pets_age = Age;
    this.pets_cuteness = Cuteness;
}

var Meanie = new myPets("cat", "Ennie Meanie", 4, "10/10" );
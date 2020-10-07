function myDictionary() { // creating dictionary
    var Animal = { // estaclishing KVP's of myDictionary
        species:"cat",
        color:"black",
        breed:"feral",
        age:4,
        sound:"squeak",
      };
    delete Animal.sound; // Delete statement
    document.getElementById("Dictionary").innerHTML = Animal.sound; // Returning deleted statement
}
const prompt = require('prompt-sync')();

let favoriteColors = [];
let colorInput;

while (favoriteColors.length < 3){
    colorInput = prompt("Enter a favorite color:");
    favoriteColors.push(colorInput);
    console.log("Your favorite colors are:", favoriteColors)
}
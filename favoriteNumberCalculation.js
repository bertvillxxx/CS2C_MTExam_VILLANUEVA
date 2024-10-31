const prompt = require('prompt-sync')();

let favNumber = 21;
let guess;

while (true) {
    guess = prompt("Guess my favorite number:");
    geuss = parseInt(guess);
if (guess === favNumber){
    console.log("You got it! My favorite number is" + favNumber);
    break;
} else if (guess < favNumber){
    console.log("Too low! Try again.");
} else {
    console.log("Too high! Try again.");
  }
}

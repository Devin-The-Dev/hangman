/* 
I know:
assigning variables
if/else statments
for loops
functions
methods
oporators
*/

/*
  I still need:
  The correct and incorrect letters to display
  Hangman picture changes when players guesses incorrectly
*/

var characters = ["Buzz", "Nemo", "Stitch", "Moana"];
var word = characters[Math.floor(Math.random() * characters.length)];
var wordArray = word.split(""); // empty string is what makes a chosen word into an array
console.log(wordArray);
var letters = "abcdefghijklmnopqrstuvwxyz";
var lettersArray = letters.split("");
console.log(lettersArray);
var hiddenWord = "";
var mistakesRemaining = 7;
var guess;
var guessesLeft = 25;
var lettersGuessed; //Variable is meant for letters the player guessed wrong

function startUp() {
  document.getElementById("startUp").style.display = "none";
}

// Section displays underscores on screen, somehow it's not displayed if turned into a function
for (var i = 0; word.length > i; i++) {
  if (wordArray == lettersArray) {
  } else {
    hiddenWord += "_";
  }
}
document.getElementById("hiddenWord").innerHTML = hiddenWord;

//Guesses Remaining
document.getElementById("numbers").innerHTML = guessesLeft;
document.onkeyup = function(event) {
  guess = event.key;
  console.log("inside", guess);
  if (document.onkeyup != wordArray) {
    guessesLeft--;
    document.getElementById("numbers").innerHTML = guessesLeft;
    console.log(guessesLeft);
  }
};

//Letters Guessed wrong
document.onkey = function(event) {
  lettersGuessed = event.key;
  console.log("inside2", lettersGuessed);
  if (document.onkeyup != wordArray) {
    lettersGuessed++;
    document.getElementById("letters").innerHTML = lettersGuessed.push;
    console.log(lettersGuessed);
  }
};
//Guesses: Remaining and letters

/*function {
  if (var j = 0, j < lettersArray.length; j++) {
  show it and -1 Guesses Remaining and add letter to Letters Guessed
  } else {
  move 1 photo slide and -1 guesses remaining and add letter to Letters Guessed 
  }
}*/

/*function compare (wordArray, guess) {
  for (var j = 0; j < wordArray.length; j++) {
    if ()
  }
}*/

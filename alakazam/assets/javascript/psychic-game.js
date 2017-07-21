// Define alphabet letters.
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// global variables.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// guessesSoFar is an array for user guesses.
var guessesSoFar = [];
// userGuess holds user choices.
var userGuess = null;
// Have computer pick a letter and store it in letterToBeGuessed.
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " Guesses left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// start listening for events
document.onkeyup = function(event) {

  // When user presses a key, it records it and saves to userGuess.
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // Add the user's guess to guessesSoFar array.
  if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
    // decrement amount of guesses left.
    guessesLeft--;
  }

  // if letterToBeGuessed = userGuess give player a win.
  // reset guessesLeft to 9, guessesSoFar should = 0.
  // computer picks another letter.
  if (letterToBeGuessed == userGuess) {
    wins++;
    console.log("You beat Alakazam!");
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
  }

  // if guessesLeft = to 0 then give player a loss.
  // set guessesLeft to 9, and empty guessesSoFar and have computer pick again.
  if (guessesLeft == 0) {
    losses++;
    console.log("Alakazam beat you!");
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
  }

  // Displaying progress to HTML
  var html = "<p><h3>Alakazam wants you to guess a letter</h3></p>" + "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>" + "<p><h3>Guesses Left: " + guessesLeft + "</h3></p>" + "<p><h3>Your guesses so far: " + guessesSoFar + "</h3></p>";
document.querySelector("#game").innerHTML=html;
}

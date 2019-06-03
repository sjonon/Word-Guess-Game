//variables
var directions = document.getElementById("directions");
var score = document.getElementById("score");
var word = document.getElementById("word");
var guesses = document.getElementById("guesses");
var lettersGuessed = document.getElementById("lettersGuessed");

// creates setup for random image to be placed in browser window
var randomImage = document.createElement("img");
document.getElementById("hpimage").appendChild(randomImage);
  // random image set to default:
randomImage.src = "assets/images/images.png";

var names = ["hermione", "dumbledore", "harry", "ron", "fred", "george", "sirius", "luna", "neville", "voldemort", "dudley", "draco", "hedwig"];
//computer chooses random word from names array
var wordPicked = names[Math.floor(Math.random() * names.length)];
//computer displays the word with letters hidden
var hiddenWord = [];
for (var i = 0; i < wordPicked.length; i++) { hiddenWord[i] = "_"; };

var guessesRemaining = 15;
var letters = [];
var userScore = 0

function gameReset() {
  guessesRemaining = 15;
  letters = [];
  wordPicked = names[Math.floor(Math.random() * names.length)];
  hiddenWord = [];
  var images = ["crest.jpg", "harry-potter_header11.jpg", "harrypotter.jpeg", "hedwig.png", "images.png", "train.jpg"]
  var num = images[Math.floor(Math.random() * images.length)];
  for (var i = 0; i < wordPicked.length; i++) { hiddenWord[i] = "_"; };
  word.textContent = hiddenWord;
  lettersGuessed.textContent = ("Letters Guessed: " + letters);
  guesses.textContent = ("Guesses Remaining: " + guessesRemaining);
  var randomImage = document.createElement("img");
  console.log(num, images[num]);
  document.getElementById("hpimage").innerHTML = "";
  document.getElementById("hpimage").appendChild(randomImage);
  randomImage.src = "assets/images/" + num;
  console.log("game reset", guessesRemaining, wordPicked, hiddenWord)
}


//begin script for start of game - these may need to be broken out differently to make the game more responsive
document.onkeypress = function (event) {
  var userGuess = event.key;
  console.log(wordPicked);
  console.log(userGuess);
  directions.textContent = "";
  word.textContent = hiddenWord;
  for (var i = 0; i < wordPicked.length; i++) {
    // console.log(wordPicked[i]);
    if (wordPicked.indexOf(userGuess) !== -1 && wordPicked[i] === userGuess) {
      hiddenWord[i] = wordPicked[i];
      word.textContent = hiddenWord;
      console.log("hidden word", hiddenWord);
    }
    // the else statement here seems to fire every time rather than only when the if statement is false
    // else {
    //     console.log("letter not in word");
    //     }
  }
  if (wordPicked.indexOf(userGuess) === -1) {
    letters.push(userGuess);
    guessesRemaining--;
  }
  if (hiddenWord.indexOf("_") === -1) {
    // how do you get this to run only once?
    userScore++;
    word.textContent = wordPicked;
    directions.textContent = "click mouse to play again"
    //function to generate new word and reset letters guessed and remaining guesses
    document.onmousedown = function (event) { gameReset() }
  } else if (guessesRemaining === 0) {
    console.log("they lose");
    word.textContent = wordPicked;
    directions.textContent = "click mouse to play again";
    document.onmousedown = function (event) { gameReset() }
    //function to generate new word and reset letters guessed and remaining guesses
  }
  score.textContent = ("Score: " + userScore);
  lettersGuessed.textContent = ("Letters Guessed: " + letters);
  guesses.textContent = ("Guesses Remaining: " + guessesRemaining);
}
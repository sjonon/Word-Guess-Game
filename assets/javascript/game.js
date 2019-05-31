//variables
var directions = document.getElementById("directions");
var score = document.getElementById("score");
var word = document.getElementById("word");
var guesses = document.getElementById("guesses");
var lettersGuessed = document.getElementById("lettersGuessed");

var names = ["hermione", "dumbledore", "harry", "ron", "fred", "george", "sirius", "luna", "neville", "voldemort", "dudley", "draco", "hedwig"];
//computer chooses random word from names array
var wordPicked = names[Math.floor(Math.random() * names.length)];
//computer displays the word with letters hidden
var hiddenWord = []
for (var i = 0; i < wordPicked.length; i++){hiddenWord[i] = "_";}

var guessesRemaining = 15;
var letters = [];
var userScore = 0



//begin script for start of game - these may need to be broken out differently to make the game more responsive
document.onkeypress = function (event) {
    var userGuess = event.key;
    console.log(wordPicked);
    directions.textContent = "";
    word.textContent = hiddenWord;
    for (var i = 0; i < wordPicked.length; i++){
        if (wordPicked.indexOf(userGuess) != -1 && wordPicked[i] === userGuess){
                hiddenWord[i] = wordPicked[i];}
            // the else statement here seems to fire every time rather than only when the if statement is false
            //else {
            //     console.log("letter not in word");
            //     }
        }
    if (wordPicked.indexOf(userGuess) === -1){
        letters.push(userGuess);
        guessesRemaining--;
    }
    if (hiddenWord.indexOf("_") === -1) {
        userScore++;
      } else if (guessesRemaining === 0) {
        console.log("they lose");
      }
    score.textContent = ("Score: " + userScore);
    lettersGuessed.textContent = ("Letters Guessed: " + letters);
    guesses.textContent = ("Guesses Remaining: " + guessesRemaining);}
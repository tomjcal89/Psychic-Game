// establish vairables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
"j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z"];
var lost = 0;
var win = 0;
var guesses = 9;
var guessLetter = "";

// pull elements by id
var winning = document.getElementById("wins");
var losing = document.getElementById("losses");
var guess = document.getElementById("guessesLeft");
var letterGuess = document.getElementById("lettersGuessed");


//have computer come up with random letter
function renderLetter () {
var randLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randLetter)
}

//functions

function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + win;
  }

  function updateLosses() {
      document.querySelector("#losses").innerHTML = "Losses: " + lost;
  }

  function guessLetters() {
      document.querySelector("#lettersGuessed").innerHTML = "Letters you have guessed: " + guessLetter;
  }



updateLosses()
updateWins()
guessLetters()
renderLetter()

//when you press an incorrect key
document.onkeyup = function(event){
   

    //determining what key you pressed

    var userInput = event.key.toLowerCase();

    //have letter show up in "letters you have guessed"

        //have the "number of Guesses left go down by 1"

}


// if number of guesses equal 0, add 1 to number of losses

//if number of guesses equal 0, have game restart
    //number of guesses reset to 9
    //guessed letters reset to nothing

// if correct key is hit, number of wins goes up by 1
    //letters guessed resets
    //number of guesses left resets to 9


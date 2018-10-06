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

//setting scores
winning.textContent = win;
losing.textContent = lost;
guess.textContent = guesses;
letterGuess.textContent = guessLetter

//have computer come up with random letter

var randLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randLetter)


//when you press an incorrect key
    //have letter show up in "letters you have guessed"
        //have the "number of Guesses left go down by 1"


// if number of guesses equal 0, add 1 to number of losses

//if number of guesses equal 0, have game restart
    //number of guesses reset to 9
    //guessed letters reset to nothing

// if correct key is hit, number of wins goes up by 1
    //letters guessed resets
    //number of guesses left resets to 9

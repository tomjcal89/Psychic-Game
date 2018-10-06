// establish vairables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];

var lost = 0;
var win = 0;
var guesses = 9;
var guessLetter = "";

//have computer come up with random letter
function renderLetter() {
    randLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randLetter)
}

//functions

function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + win;
}

function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + lost;
}

function updatedGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses remaining: " + guesses;
}


updateLosses()
updateWins()
updatedGuessesLeft()
renderLetter()

document.onkeyup = function (event) {

    var userInput = event.key.toLowerCase();

    if (userInput === randLetter) {

    }

    if (userInput === randLetter) {
        win++;
        updateWins();
        renderLetter()
    }

    if (guesses <= 0) {
        lost++;
        updateLosses()
    }
    else {
        guesses--;
        updatedGuessesLeft();
        document.getElementById("lettersGuessed").innerHTML += (userInput + ", ");
    }

}


//if win goes up- reset guesses and 







    //have letter show up in "letters you have guessed"

    //have the "number of Guesses left go down by 1"




// if number of guesses equal 0, add 1 to number of losses

//if number of guesses equal 0, have game restart
    //number of guesses reset to 9
    //guessed letters reset to nothing

// if correct key is hit, number of wins goes up by 1
    //letters guessed resets
    //number of guesses left resets to 9


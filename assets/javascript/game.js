// establish vairables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];



var lost = 0;
var win = 0;
var guesses = 9;



//have computer come up with random letter
function renderLetter() {
    randLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randLetter)
}

//making functions to add to wins and losses increase, making a reset for when theres a win or you run out of guesses
//and making the number of guesses go down. 

function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + win;
}

function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + lost;
}

function updatedGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses remaining: " + guesses;
}

function reset() {
    guesses = (9);
    document.getElementById("lettersGuessed").innerHTML = (" ");
}
//activating functions
updateLosses()
updateWins()
updatedGuessesLeft()
renderLetter()
reset()

//setting my key function for when you press a key, it will document what key you pressed and see if it matched the letter being rendered

document.onkeydown = function (event) {

    var userInput = event.key.toLowerCase();

    if (userInput === randLetter) {

    }

    if (userInput === randLetter) {
        win++;
        updateWins();
        renderLetter()
        reset()

    }

    if (guesses <= 1) {
        lost++;
        updateLosses();
        updatedGuessesLeft();
        renderLetter();
        reset()

    }
    else {
        guesses--;
        updatedGuessesLeft();
        document.getElementById("lettersGuessed").innerHTML += (userInput + "  ");

    }


}

//still trying to figure out how to not make the correct letter show up on a new page. 

//need to figure out how to make guesses go back to 9 once you lose and not stay at 1 for one last time. 


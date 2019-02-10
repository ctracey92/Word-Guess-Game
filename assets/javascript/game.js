//varaibles for wins/losses
var wins = 0;

//variable for chances left
var chancesLeft = 10;

//variable for letter place holder array
var answerBox = [];

//Array of words to guess
var secretCodes = ["hacker", "blackhat","encrypt", "firewall", "password"]

//Randomly select word (needs to be on game start)
    var word = secretCodes[Math.floor(Math.random()*secretCodes.length)]
    console.log (word);  

//Creates the place holder for unguessed letters
for (var i = 0; i < word.length; i++) {
answerBox.push("_");
}
var remainingLetters = word.length; 
console.log (answerBox);
 // HERE IS WHERE THE GAME CODE GOES

//On page load the mystery word is displayed as a series of underscores
window.onload =function() {
    docUnderScores();
    function docUnderScores() {
        document.getElementById("passwordBox").innerHTML = "Password: " + answerBox
    }
    docWins();
    function docWins() {
        document.getElementById("wins").innerHTML= "Wins: " + wins
    }
    docGuessesLeft();
    function docGuessesLeft() {
        document.getElementById("chancesLeft").innerHTML= "Guesses Left: " + chancesLeft
    }
}

function letterInWord(letter) {
    var positions = new Array();
    for (i = 0; i < word.length; i++) {
        if (word[i] === letter)
        positions.push(i);
    }
    return positions;
}

function lettersToGuess() {
    var toGuess = 0;
    for (i in word) {
        if (word[i] === "_")
        toGuess++;
    }
    return toGuess;
}

//creates an array to store user guesses
var userGuesses = [];
document.onkeyup = function (e) {
    var keyPress = e.key;
    var guessed = keyPress.toLowerCase();
    var positions = letterInWord(guessed);
    //if letter is correct, print it instead of filler text
    if (positions.length){
        for (i = 0; i < positions.length; i++){
            answerBox[positions[i]] = guessed;
        }function progress(){
        document.getElementById("passwordBox").innerHTML = answerBox.join(" ");
    }
    progress();
    }
    //If the word was not in it put the letter in the letters guessed box
    else {
        lettersGuessed();
        function lettersGuessed() {
            document.getElementById("guesses").innerHTML += guessed + " ";
            chancesLeft--;
            document.getElementById("chancesLeft").innerHTML = "Chances Left "+ chancesLeft;
        }
        
    }
}
    
// if (lettersToGuess() === 0) {
//     guessesLeft = 10;

// }




   










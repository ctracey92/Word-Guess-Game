//varaibles for wins/losses
var wins = 0;

//variable for chances left
var chancesLeft = 10;

//variable for letter place holder array
var answerBox = [];

//varaible for guessed letters:
var alreadyGuessed = [];

//Array of words to guess
var secretCodes = ["hacker", "blackhat","encrypt", "firewall", "password", "qwerty", "iloveyou", "qwertyuiop","monkey","dragon","sunshine","princess", "admin", "welcome", "football", "donald","charlie"]

//Randomly select word (needs to be on game start)
    var word = secretCodes[Math.floor(Math.random()*secretCodes.length)]
    console.log (word);  

//Creates the place holder for unguessed letters
function createAnswerBox(){
    for (var i = 0; i < word.length; i++) {
        answerBox.push("_");
    }
}

for (var i = 0; i < word.length; i++) {
answerBox.push("_");
}
var remainingLetters = answerBox.indexOf("_") 
console.log (answerBox);

 //Displays current wins
 function docWins() {
    document.getElementById("wins").innerHTML= "Wins: " + wins
}
//On page load the mystery word is displayed as a series of underscores
window.onload =function() {
    docUnderScores();
    function docUnderScores() {
        document.getElementById("passwordBox").innerHTML = answerBox
    }
    docWins();
    docGuessesLeft();
    function docGuessesLeft() {
        document.getElementById("chancesLeft").innerHTML= "Guesses Left: " + chancesLeft
    }
}

//checks to see if the letter is in word
function letterInWord(letter) {
    var positions = new Array();
    for (i = 0; i < word.length; i++) {
        if (word[i] === letter)
        positions.push(i);
    }
    return positions;
}

//Checks to see if the user won or not
function checkForWin() {
    if(answerBox.indexOf("_") === -1){
        wins++;
        alert("You're In!");
        resetGame();
    }
    
}

//Reset Function
function resetGame(){
    //Reset chances
    chancesLeft = 10;
    //Pick a new word
    word = secretCodes[Math.floor(Math.random()*secretCodes.length)]
    console.log (word);
    //reset arrays
    answerBox = [];
    i = 0;
    //Build guessing box
    for (var i = 0; i < word.length; i++) {
        answerBox.push("_");
        }
        var remainingLetters = answerBox.indexOf("_") 
        console.log (answerBox);
    //Resets Letters Guessed
    document.getElementById("guesses").innerHTML = ""
    //Reset Password box
    document.getElementById("passwordBox").innerHTML = answerBox.join(" ");
}

//creates an array to store user guesses
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
    checkForWin();
    docWins();
    }

//If the word was not in it put the letter in the letters guessed box
    else {
        lettersGuessed();
        function lettersGuessed() {
            document.getElementById("guesses").innerHTML += guessed + " ";
            chancesLeft--;
            document.getElementById("chancesLeft").innerHTML = "Chances Left "+ chancesLeft;

            //Alerts lose message if chances are equal or less than 0.
            if (chancesLeft <= 0){
                alert("You lose the FBI has been notified of your activity!");
                resetGame();
            }
        }
        
    }
    checkForWin();
}







   










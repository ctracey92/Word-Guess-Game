//varaibles for wins/losses
var wins = 0;

//variable for chances left
var guessesLeft = 10;

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
}

function letterInWord(letter) {
    var positions = new Array();
    for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter)
        positions.push(i);
    }
    return positions;
}

function lettersToGuess() {
    var toGuess = 0;
    for (i in answerBox) {
        if (answerBox[i] === "_")
        toGuess++;
    }
    return toGuess;
}

//creates an array to store user guesses
var userGuesses = [];
document.onkeyup = function (e) {
    var keyPress = e.key;
    userGuesses.push(keyPress);
    document.getElementById("guesses").innerHTML ="Letters Guessed So Far..." + userGuesses;
    console.log(userGuesses);
};


   









//    //creates the onkeyup event and logs it (currently is is only local and not global)
//     var userInput = document.onkeyup = function(event) {
//         console.log(event.key);
//         }  
//     for (var answerUpdate = 0; answerUpdate < word.length; answerUpdate++) {
//         //If the user gets a letter right it prints the letter
//         if (word[answerUpdate] === userInput) {
//             answerBox[answerUpdate] = userInput;
//             remainingLetters--;
//         }
        
//     //     //If the user is wrong subtract one guess
//     //     else {
//     //         guessesLeft--;
//     //     }
//     // }

//     // indexOf
   

// //PSEUDO CODE


// // if (x === letter in word)
// // print the letter

// // if (x !== letter in word && has not been used){
// //     nchances - 1
// // }

// // if (remainingLetters === 0) {
// //     print "You're in!!!"
// // }
    }
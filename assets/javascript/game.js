//varaibles for wins/losses
var wins = 0
var losses = 0

//variable for chances left
var guessesLeft = 10

//Array of words to guess
var secretCodes = ["hacker", "blackhat","encrypt", "firewall", "password"]

//Randomly select word (needs to be on game start)
    var word = secretCodes[Math.floor(Math.random()*secretCodes.length)]
    console.log (word);  

//Creates the place holder for unguessed letters
var answerBox = [];
for (var i = 0; i < word.length; i++) {
answerBox[i] = "_";
}
var remainingLetters = word.length; 
console.log (answerBox);
 // HERE IS WHERE THE GAME CODE GOES


    

    //creates the onkeyup event and logs it (currently is is only local and not global)

    var userInput = document.onkeyup = function(event) {
        console.log(event.key) ;
        }


    //creates an array to store user guesses
    var userGuesses = [];
    document.onkeyup = function (e) {
        var keyPress = e.key;
        userGuesses.push(keyPress);
        console.log(userGuesses);
    };

    // console.log(userGuesses);
    
    for (var answerUpdate = 0; answerUpdate < word.length; answerUpdate++) {
        //If the user gets a letter right it prints the letter
        if (word[answerUpdate] === userInput) {
            answerBox[answerUpdate] = userInput;
            remainingLetters--;
        }
        
        //If the user is wrong subtract one guess
        else {
            guessesLeft--;
        }
    }

    // indexOf
   

// //PSEUDO CODE


// // if (x === letter in word)
// // print the letter

// // if (x !== letter in word && has not been used){
// //     nchances - 1
// // }

// // if (remainingLetters === 0) {
// //     print "You're in!!!"
// // }







    
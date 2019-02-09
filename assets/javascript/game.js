
console.log(1)
//Array of words to guess
var secretCodes = ["hacker", "blackhat","encrypt", "firewall", "password"]

//Randomly select word (needs to be on game start)
var word = secretCodes[Math.floor(Math.random()*secretCodes.length)]

// HERE IS WHERE THE GAME CODE GOES

while (remainingLetters > 0){
    //creates the onkeyup event and logs it
    document.onkeyup = function(event) {
    var userGuess = event.key.toLocaleLowerCase;
    }

    //creates an array to store user guesses
    var userGuesses = [];
    document.onkeyup = function (e) {
        var keyPress;
        if (typeof event !== 'undefined') {
            keyPress = event.keyCode;
        }
        else if (e) {
            keyPress = e.which;
        }
        userGuesses(String.fromCharCode(keyPress));
        return false;
    };

    //Creates the place holder for unguessed letters
    var answerBox = [];
    for (var i = 0; i < word.length; i++) {
    answerBox[i] = "_";
    }
    var remainingLetters = word.length; 

        for (var answerUpdate = 0; answerUpdate < word.length; answerUpdate++){
            if (word[answerUpdate] ===guess){
                answerBox[answerUpdate] = guess;
                remainingLetters--;
            }
        }
    

    
}
//PSEUDO CODE



// if (x === letter in word)
// print the letter

// if (x !== letter in word && has not been used){
//     nchances - 1
// }

// if (remainingLetters === 0) {
//     print "You're in!!!"
// }







    
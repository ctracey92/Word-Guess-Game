//Array of words to guess
var secretCodes = ["hacker", "blackhat","encrypt", "firewall", "password"]

//Randomly select word
var word = secretCodes[Math.floor(math.random()*words.length)]

//Creates the place holder for unguessed letters
var answerBox = [];
for (var i = 0; i <word.length; i++) {
    answerBox[i] = "_";
}
var remainingLetters = word.length; 




// HERE IS WHERE THE GAME CODE GOES
//PSEUDO CODE


// Userinput letters on key up to be saved as a variable array 'lettersGuessed'

// if (x === letter in word)
// print the letter

// if (x !== letter in word && has not been used){
//     nchances - 1
// }

// if (remainingLetters === 0) {
//     print "You're in!!!"
// }
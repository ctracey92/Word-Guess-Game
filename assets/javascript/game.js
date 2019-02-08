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


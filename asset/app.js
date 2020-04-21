//GLOBAL VARIABLES
var numWin;
var numLose;
var wordToGuess = ["Coco", "Puma", "Treats", "Bandana", "Cuddles", "Pets"];
var numberOfGuess = 9;
var yourGuess = [];
var wordDisplay = [];
var computerChoice = wordToGuess[Math.floor(Math.random() * wordToGuess.length)].toUpperCase();
var wordToLetters = computerChoice.split("");


//START THE GAME

function startGame() {
    //set up initial state before game is played
    computerChoice = wordToGuess[Math.floor(Math.random() * wordToGuess.length)].toUpperCase();
    wordToLetters = computerChoice.split("");
    wordDisplay = [];
    numberOfGuess = 9;
    numWin = 0;
    numLose = 0;
    yourGuess = [];

    //create _ _ _ _ based on how many letters in the word
    for(var i = 0; i < wordToLetters.length; i ++) {
        wordDisplay.push("_");
    }

    //print innerHTML
    document.querySelector("#win").innerHTML = numWin;
    document.querySelector("#lose").innerHTML = numLose;
    document.querySelector("#wordToGuess").innerHTML = wordDisplay.join(" ");
    document.querySelector("#yourGuess").innerHTML = yourGuess;
    
    //tests
    console.log(computerChoice);
    console.log(wordToLetters);
    console.log(wordDisplay);
}

startGame();

document.onkeypress = function(event) {
    var letter = event.key.toUpperCase();
    var isLetterPrinted = false;

    for(var i = 0; i < wordToLetters.length; i++) {
        
        if(letter === wordToLetters[i]) {
            isLetterPrinted = true;

            //test
            console.log(isLetterPrinted);
            if(isLetterPrinted === true) {
                wordDisplay[i] = letter;
                document.querySelector("#wordToGuess").innerHTML = wordDisplay.join(" ");
            }
            }
        }
        
    
    
    //tests
    console.log(letter);
    

}
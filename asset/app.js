//GLOBAL VARIABLES
var numWin = 0;
var numLose = 0;
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
    for (var i = 0; i < wordToLetters.length; i++) {
        wordDisplay.push("_");
    }

    //print innerHTML
    document.querySelector("#win").innerHTML = numWin;
    document.querySelector("#lose").innerHTML = numLose;
    document.querySelector("#wordToGuess").innerHTML = wordDisplay.join(" ");
    document.querySelector("#numberOfGuess").innerHTML = numberOfGuess;

    //tests
    console.log(computerChoice);
    console.log(wordToLetters);
    console.log(wordDisplay);
}

startGame();

document.onkeypress = function (event) {
    var letter = event.key.toUpperCase();
    var isLetterPrinted = false;
    numberOfGuess--;
    yourGuess.push(letter);
    document.querySelector("#numberOfGuess").innerHTML = numberOfGuess;
    document.querySelector("#yourGuess").innerHTML = yourGuess;


    for (var i = 0; i < wordToLetters.length; i++) {
        
        if (letter === wordToLetters[i]) {
            isLetterPrinted = true;

            if (isLetterPrinted) {
                wordDisplay[i] = letter;
                document.querySelector("#wordToGuess").innerHTML = wordDisplay.join(" ");
            
            } 
        } else {
            if (numberOfGuess === 0) {
                numLose++;
                document.querySelector("#lose").innerHTML = numLose;
                console.log(numLose + " +1");
                startGame();
            } else {
                
                
                
            }
        }
        
    }



    //tests
    console.log(letter);


}
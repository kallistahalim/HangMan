//GLOBAL VARIABLES
var numWin;
var numLose;
var wordToGuess = ["Coco", "Puma", "Treats", "Bandana", "Cuddles", "Pets"];
var numberOfGuess = 9;
var yourGuess = [];


//START THE GAME

function startGame() {
    //set up initial state before game is played
    var computerChoice = wordToGuess[Math.floor(Math.random() * wordToGuess.length)].toUpperCase();
    var wordToLetters = computerChoice.split("");
    var wordDisplay = [];
    numberOfGuess = 9;
    numWin = 0;
    numLose = 0;

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
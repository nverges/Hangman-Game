// GLOBAL VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////////////////////

var options = ["Ross","Joey","Chandler","Rachel","Monica","Phoebe"];
var selectedWord = [];
var wrongLetters = [];
var numBlanks = 0;
var lettersinWord = []; // R _ _ _
var blanksAndSuccesses = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;


// FUNCTIONS
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function startGame() {
	// choose a random string from the "options" array and store it in the variable selectedWord
	selectedWord = options[Math.floor(Math.random()*options.length)]; 
	// takes the random string chosen in selectedWord, splits it by letter, and stores it in lettersinWord
	lettersinWord = selectedWord.split("");
	// populates the numbBlanks array with "_" for each value in selectedWord.split
	numBlanks = selectedWord.length;


	// RESET
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// The startGame function has grabbed a value from the options array, turned it into lettersinWord variable and split it up by character
	// numBlanks counts the length of the letters in lettersinWord
	for (var i=0; i<numBlanks; i ++) {
		blanksAndSuccesses.push("_");
	}

			// Debugging
			console.log(selectedWord);
			console.log(lettersinWord);
			// console.log(numBlanks);
			console.log(blanksAndSuccesses);

}




	// function that will occur upon pressing a key
		// 	document.onkeyup = function() {

		// 	var reset = function() {
		// 		// reset guesses left counter
		// 		guessesLeft = 9;
		// 		// document.write(lettersinWord());
		// 		// pull a new value from the options array to selectedWord variable
		// 		selectedWord = options[Math.floor(Math.random()*options.length)]; 
		// 	}


		// 	// captures key pressed in the form of a string and stores it in a new variable called wrongLetters 
		// 	wrongLetters = String.fromCharCode(event.keyCode).toLowerCase();

		// 		// pushes wrongLetters values into the empty array lettersinWord
		// 		wrongLetters = event.key;
		// 		lettersinWord.push(wrongLetters);

		// 			console.log(wrongLetters);
		// 			console.log(lettersinWord);





		// }





// PROCESSES
/////////////////////////////////////////////////////////////////////////////////////////////////////////
startGame();
// GLOBAL VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////////////////////

var options = ["Ross","Joey","Chandler","Rachel","Monica","Phoebe"];
var selectedWord = [];
var userGuess = [];
var letterChosen = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;


// FUNCTIONS
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function startGame() {
	selectedWord = options[Math.floor(Math.random()*options.length)]; 
	selectedWord = selectedWord.split(" ");

}


	// function that will occur upon pressing a key
			document.onkeyup = function() {

			var reset = function() {
				// reset guesses left counter
				guessesLeft = 9;
				// document.write(letterChosen());
				// pull a new value from the options array to selectedWord variable
				selectedWord = options[Math.floor(Math.random()*options.length)]; 
			}


			// captures key pressed in the form of a string and stores it in a new variable called userGuess 
			userGuess = String.fromCharCode(event.keyCode).toLowerCase();

				// pushes userGuess values into the empty array letterChosen
				userGuess = event.key;
				letterChosen.push(userGuess);



				// Debugging
				console.log(selectedWord);
				console.log(userGuess);
				

		}





// PROCESSES
/////////////////////////////////////////////////////////////////////////////////////////////////////////
startGame();
//View Object will contain methods for displaying the Message, Hit, Misses
var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location){

	},
	displayMiss: function(location){}
};

// Model Object contains information about the game status.
var model = {
	boardSize:

	numShips:

	ships:

	shipsSunk:

	shipLength:

	fire: function()

};

//Controller will keep track of the player's scoring.
var controller = {
	guesses: 0

	processGuesses: function(guess){

	},

};
//View Object will contain methods for displaying the Message, Hit, Misses
var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};

// Model Object contains information about the game status.
var model = {
	boardSize: 7,

	numShips: 3,

	shipsSunk: 0,

	shipLength: 3,

	generateShipLocations: function() {
		var locations;
		for (var i = 0, i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision (locations));
			this.ships[i].locations = locations;
		}
	},

	generateShip: function() {
		//use math random to select whether its a horizontal or vertical ship
		
	},

	collision: function() {
		// prevent collision of ships on placement
	},

	var ships = [{locations: [0, 0, 0], hits: ["", "", ""]},
				{locations: [0, 0, 0], hits: ["", "", ""]},
				{locations: [0, 0, 0], hits: ["", "", ""]}

	},

	fire: function(guess) {
		for (var i = 0; i <this.numShips; i++) {
			var ship = this.ships[i];
			var index = ships.locations.indexOf(guess);  //look through the array of locations for user guess
			if (index >= 0) {    //if the index is 0 or greater, it's a hit.  Otherwise, indexOf will be -1, a miss.
				ship.hits[index] = "hit"  //at the index where the guess is located, mark it a hit in the hits array.
				view.displayHit(guess);
				view.displayMessage("HIT!");
				if (this.isSunk(ship)) {
					view.displayMessage("You sunk a battleship!");
					this.shipsSunk++;  //increment ships sunk score by 1.
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You Missed!");
		return false  //if our user guess isn't in the arrays, then it is a miss. 
	},

	isSunk: function(ship) {
		for (var i = 0; i <this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {  //if all three elements in the ship array do not equal "hit" then the ship not sunk
				return false;
			}
		}
		return true;
	}

};

//Controller will keep track of the player's scoring.
var controller = {
	guesses: 0

	processGuesses: function(guess){
		var location = parseGuess(guess);

		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sank all my battleships, in " + this.guesses + "guesses");
			}
		}

	  function parseGuess(guess) {
		var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

		// Dealing with a bad user entry.
		if (guess === null || guess.length != 2) {
			alert("Invalid Entry.  Please enter a letter and a number on the board."):;
		} else {
			var firstChar = guess.CharAt(0);
			var row = alphabet.indexOf(firstChar);
			var column = guess.CharAt(1);

			// Dealing with guess out of range
			if (isNaN(row)) || if (isNaN(column)) {
				alert("Your guess is not in the board range. Please try again!")
			} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
				alert("Your guess is out of board range.  Please try again!");
			} else {
				return row + column;
			}
		return null;
			}
		}
	}
		}

	},

};
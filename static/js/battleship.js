
// Ship location variables
var randomLocation = floor(Math.random() * 5);
var location1 = randomLocation;
var location2 = location1 + 1 
var location3 = location2 + 1

var user_guess;  //undefined until played

var hits = 0;
var guesses = 0;

var is_sunk = false; 

while (is_sunk == false) {
	guess = prompt("Sink the ship!  Enter a number from 0 - 6: ");
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid number between 0 - 6!");
	} else {
		guesses = guesses + 1;

		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Hit!");
			hits = hits + 1;
			if (hits == 3) {
				is_sunk = true; 
				alert("You've sunk my battleship!");
			}
		} else {
			alert("Miss :(");
		} 
	}
}

var user_stats = "You took " + guesses + " guesses to sink the battleship, " + 
					"which means your accuracy was "+ (3/guesses);
alert(user_stats);

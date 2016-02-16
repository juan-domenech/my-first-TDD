//Kata: Rock Paper Scissors!
//Problem Description
//We need a function rockPaperScissors() that can receive two parameters with the move of each of the two players in the game "Rock Paper Scissors".
//The possible values are : "PAPER", "SCISSORS" or "ROCK"
//If the function is called with only one parameter the move of the second player should be randomly generated.
//>> rockPaperScissors("PAPER","SCISSORS")
//"PAPER vs SCISSORS => SCISSORS wins!"
//>> rockPaperScissors("ROCK","ROCK")
//"ROCK vs ROCK => tie!"
//>> rockPaperScissors("PAPER")
//"PAPER vs ROCK => PAPER wins!"
//>> rockPaperScissors("PAPER")
//"PAPER vs PAPER => tie!"


function rockPaperScissors( player1, player2 ) {

	// We exit with error when received no parameters
	if ( player1 == undefined ){
		return 'ERROR!';
	}

	// Exit with error when player1 is not valid
	if ( ( player1 != 'PAPER') && ( player1 != 'SCISSORS') && ( player1 != 'ROCK') ){
		return 'ERROR!';
	}

	// If only player1 is available => create player2
	if ( player2 == undefined ){
		player2 = Math.floor(Math.random() * 3) + 1
	}
	switch(player2){
	case 1:
		player2 = 'PAPER';
		break;
	case 2:
		player2 = 'SCISSORS';
		break;
	case 3:
		player2 = 'ROCK';
		break;
	}

	// Exit with error when player2 is not valid
	if ( ( player2 != 'PAPER') && ( player2 != 'SCISSORS') && ( player2 != 'ROCK') ){
		return 'ERROR!';
	}

	// Tie!
	if ( player1 == player2 ){
		return player1+' vs '+player2+' => tie!';
	}

	// Possible outcomes

	if ( ( player1 == 'PAPER') && ( player2 == 'SCISSORS') ) {
		return 'PAPER vs SCISSORS => SCISSORS wins!';
	}

	if ( ( player1 == 'PAPER') && ( player2 == 'ROCK') ) {
		return 'PAPER vs ROCK => PAPER wins!';
	}

	if ( ( player1 == 'ROCK') && ( player2 == 'PAPER') ) {
		return 'ROCK vs PAPER => PAPER wins!';
	}

	if ( ( player1 == 'ROCK') && ( player2 == 'SCISSORS') ) {
		return 'ROCK vs SCISSORS => ROCK wins!';
	}

if ( ( player1 == 'SCISSORS') && ( player2 == 'PAPER') ) {
		return 'SCISSORS vs PAPER => SCISSORS wins!';
	}

if ( ( player1 == 'SCISSORS') && ( player2 == 'ROCK') ) {
		return 'SCISSORS vs ROCK => ROCK wins!';
	}


}
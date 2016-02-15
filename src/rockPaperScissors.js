function rockPaperScissors( player1, player2 ) {

	// We exit with error with no parameters
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
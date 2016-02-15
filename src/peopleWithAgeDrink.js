function peopleWithAgeDrink( age ){

	if ( age < 0){
	return "Sorry. I can't tell what drink because that age is incorrect!"
	}else if ( age < 14 ){
		return "drink toddy";
	}else if ( age<18 ){
		return "drink coke";
	}else if ( age<21){
		return "drink beer";
	}else if ( age<=21 ){
		return "drink whiskey"
	}else{
		return "Sorry. I can't tell what drink because that age is incorrect!"
	}

}
function FizzBuzz() {

	var numberList = '';

	for(i=1; i<=100; i++) {

		if ( ( i % 3 === 0 ) && ( i % 5 === 0 )) {
			numberList += 'FizzBuzz\n';
		} else if ( i % 5 === 0 ){
			numberList += 'Buzz\n';
		} else if (  i % 3 === 0 ){
			numberList += 'Fizz\n';
		} else {
			numberList += i+'\n';
		}

	}
	// Slice the last \n that inducts to counting errors when we later do the split()
	return numberList.slice(0,-1);
}
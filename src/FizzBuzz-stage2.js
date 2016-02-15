function FizzBuzz() {

	var numberList = '';
	var numString='';

	for(i=1; i<=100; i++) {

		numString = i.toString();

		if ( ( i % 3 === 0 ) && ( i % 5 === 0 )) {
			numberList += 'FizzBuzz\n';
		} else if ( ( i % 5 === 0 ) || ( numString.indexOf('5') != -1 ) ){
			numberList += 'Buzz\n';
		} else if ( ( i % 3 === 0 ) || ( numString.indexOf('3') != -1 ) ){
			numberList += 'Fizz\n';
		} else {
			numberList += i+'\n';
		}

	}
	// Slice the last \n that inducts to counting errors when we later do the split()
	return numberList.slice(0,-1);
}
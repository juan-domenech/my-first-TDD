function grades(score1, score2, score3){
	if (grades.length==3){
		var mean =NaN;
		a=parseInt(score1, 10);
		b=parseInt(score2, 10);
		c=parseInt(score3, 10);

		var sum=a+b+c;
		mean=sum/3;
		if (mean >= 90){
			return 'A';
		}
		else if (mean >= 80){
			return 'B';
		}
		else if (mean >= 70){
			return 'C';
		}
		else if (mean >= 60){
			return 'D';
		}
		else{
			return 'F';
		}
	}//end if
	else{
		return 'F';
	}
}
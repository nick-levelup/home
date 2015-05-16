var age = prompt('How old are you?');
	
	if(age > 14 && age < 90) {
		alert('Welcome!');
	} else if(age < 14 || age > 90 || age==null) {
		alert('Good bye!');
	}

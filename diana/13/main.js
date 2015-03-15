var num, numR, procent, count = 0;

function getRandomInt (min, max) {
	return Math.floor(Math.random()*(max-min+1) + min);
}

function getProcent (num, numR) {
	if (num > numR) {
		procent = (num - numR)/100;
	} else procent = (numR - num)/100;
	return procent;
}

for (var i = 0; count <= 50; i++) {
	numR = getRandomInt(1,20);
	num = prompt('Enter a number 1..20');
	procent = getProcent(num, numR);
	if (num === null) {
		alert('Good by!');
		break;
	}
	switch (procent) {
		case 0:
			alert('You are right!');
			count+=20;
			break;
		case 0.01:
			alert('You get 15 points! A random number was: ' + numR);
			count+=15;
			break;
		case 0.02:
			alert('You get 10 points! A random number was: ' + numR);
			count+=10;
			break;
		case 0.03:
		case 0.04:
		case 0.05:
			alert('You get 3 points! A random number was: ' + numR);
			count+=3;
			break;
		case 0.06:
		case 0.07:
		case 0.08:
		case 0.09:
		case 0.1:
			alert('You get 1 points! A random number was: ' + numR);
			count+=11;
			break;
		default:
			alert('You get 0 points! A random number was: ' + numR);
			count+=0;
	}    
}
alert('Game over! Try: ' + i);
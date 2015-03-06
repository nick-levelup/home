/* ---------------------------------------------- /*
 * Variable declaration
/* ---------------------------------------------- */
var min, max, userAnswer, points, Points, tryCount, exGame;


/* ---------------------------------------------- /*
 * Interface variable declaration
/* ---------------------------------------------- */
var intface, intfaceText, panelFix;


/* ---------------------------------------------- /*
 * Random function
/* ---------------------------------------------- */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* ---------------------------------------------- /*
 * Enter user number function
/* ---------------------------------------------- */
function getUserAnsver() {
	userAnswer = prompt('Enter your number: ');
	if (userAnswer !== null) {
		return parseInt(userAnswer);			//return user number
	} else {
		return null;							//return null if user clicked Cancel button
	}
}


/* ---------------------------------------------- /*
 * Calculate reward points function
/* ---------------------------------------------- */
function calcUserPoints(userNum, randomNum) {
	var result, key;

	key = userNum - randomNum;				//subtraction for use switch construction

	switch (key) {
		case 0:
			result = 20;
			break;
		case 1:
		case -1:
			result = 15;
			break;
		case 2:
		case 3:
		case -2:
		case -3:
			result = 10;
			break;
		case 4:
		case 5:
		case -4:
		case -5:
			result = 3;
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case -6:
		case -7:
		case -8:
		case -9:
		case -10:
			result = 1;
			break;
		default:
			result = 0;
	}
	// console.log('add Points - ' + result + ';')
	return result;
}


/* ---------------------------------------------- /*
 * Game function
/* ---------------------------------------------- */
function startGame () {

	min = parseInt(document.settingsForm.inputeMin.value);    			// take user min value
	max = parseInt(document.settingsForm.inputeMax.value);				// take user max value
	Points = parseInt(document.settingsForm.inputePoints.value);		// take user total points value

	points = 0;
	adpoints = 0;
	tryCount = 0;

	document.getElementById('inform').innerHTML = '';		// 
	panelFix = document.getElementById('pdng');					// interface fix
	panelFix.className = 'panel panel-danger'; 					// 

	while (points <= Points) {												//
		tryCount++;															// 
		exGame = getUserAnsver();											//
		if (exGame === null) {												// 
			document.getElementById('inform').innerHTML = '';				// stop game if user canceled inpute 
			intface = document.createElement('h2');							// +
			intface.className = 'game-canceled';                 			// interface message about that					
			intfaceText = document.createTextNode('Game canceled!!!');     	//
			intface.appendChild(intfaceText);                               //        					
			document.getElementById('inform').appendChild(intface);			//
			break;															//
		}																	//

		adpoints = calcUserPoints(exGame, getRandomInt(min, max));  		// variable for show in interface
		points += adpoints;													// calculate total user points
	// console.log('Left points = ' + (POINTS - points));

	intface = document.createElement('h3');							//                 
	intfaceText = document.createTextNode('Try № ' + tryCount);   	//
	intface.className = 'text-center';								// interface try count information 
	intface.appendChild(intfaceText);                             	//        
	document.getElementById('inform').appendChild(intface);			//

	intface = document.createElement('hr');							// interface spacer
	document.getElementById('inform').appendChild(intface);			//	

	intface = document.createElement('h4');                 									// 
	if (adpoints === 20) {																		// 
		intface.className = 'good';	//another color for message if added 20 points 				//  
		intfaceText = document.createTextNode('Very good!!! Added ' + adpoints + ' Points');   // 
	} else {																					// interface added reward points information 
		intfaceText = document.createTextNode('Added ' + adpoints + ' Points'); 				// 
	}																							//  
	intface.appendChild(intfaceText);                                         					//  
	document.getElementById('inform').appendChild(intface); 									// 
	intface = document.createElement('h4');                 									//
	intfaceText = document.createTextNode('Left ' + (Points - points) + ' Points');     		// interface left points inforation
	intface.appendChild(intfaceText);                                         					//
	document.getElementById('inform').appendChild(intface);										//

	intface = document.getElementById('pnts');		// interface total reward points in right side							
	intface.innerHTML = points;						//

	}

intface = document.getElementById('trcnt');			// interface user result after game
intface.innerHTML = tryCount;						//

panelFix.className += ' show'; 						//show user result block 

return true;

}
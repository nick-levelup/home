'use strict';
var min, max, userAnswer, points, Points, adpoints, tryCount, exGame, panelFix, intface, intfaceText;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUserAnsver() {
	userAnswer = prompt('Enter your number: ');
	if (userAnswer !== null) {
		return parseInt(userAnswer);			
	} else {
		return null;							
	}
}

function calcUserPoints(userNum, randomNum) {
	var result, key;
	key = userNum - randomNum;				

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
	return result;
}

function getSettings () {
	min = parseInt(document.settingsForm.inputeMin.value);    			
	max = parseInt(document.settingsForm.inputeMax.value);				
	Points = parseInt(document.settingsForm.inputePoints.value);		

	points = 0;
	adpoints = 0;
	tryCount = 0;
}

function clearInterface (place) {
	document.getElementById(place).innerHTML = '';
	return true;
}

function genIntElement (place, element, className, text, value) {
	intface = document.createElement(element);							
	intface.className = className;                 						
	intfaceText = document.createTextNode(text + value);     
	intface.appendChild(intfaceText);                                     					
	document.getElementById(place).appendChild(intface);
}

function generateInterface () {
		adpoints = calcUserPoints(exGame, getRandomInt(min, max));  		
		points += adpoints;													
		genIntElement('inform', 'h3', 'text-center', 'Try № ', tryCount);
		genIntElement('inform', 'hr', '', '', '');	
		if (adpoints === 20) {																		 
			genIntElement('inform', 'h4', 'good', 'Very good!!! Added points - ', adpoints);
		} else {																					
			genIntElement('inform', 'h4', '', ' Added points - ', adpoints);				
		}																							 
		genIntElement('inform', 'h4', '', 'Left points - ', (Points - points));
	intface = document.getElementById('pnts');			
	intface.innerHTML = points;	
}

function resultGame () {
	intface = document.getElementById('trcnt');			
	intface.innerHTML = tryCount;						
	panelFix.className += ' show'; 
}

function startGame () {
	getSettings();
	clearInterface('inform');		
	panelFix = document.getElementById('pdng');					
	panelFix.className = 'panel panel-danger'; 					 
	while (points <= Points) {												
		tryCount++;															 
		exGame = getUserAnsver();											
		if (exGame === null) {												 
			clearInterface('inform');												
			genIntElement('inform', 'h2', 'game-canceled', 'Game canceled!!!', '');
			break;															
		}	
		generateInterface();					
	}
resultGame();
return true;
}
'use strict';

/* ---------------------------------------------- /*
 * Шахматная доска
/* ---------------------------------------------- */
function getBoard(x,y) {
	var board = '';
	
	for (var i = 0; i < y; i++) {
		for (var j = 0; j < x * 2; j++) {
			board += ((i + j) % 2 === 0) ? ' ' : '#';
		}
		
		board += '\n';
	}
	
	return board;
}


/* ---------------------------------------------- /*
 * Строки
/* ---------------------------------------------- */
function countBs (str) {
	var count = 0,
		pos = str.indexOf("B");
	
	while ( pos !== -1 ) {
		count++;
		pos = str.indexOf("B",pos + 1);
	}

	return count;
}

function countChars (str, symbol) {
	var count = 0,
		str = str.toLowerCase(),
		symbol = symbol.toLowerCase(),
		pos = str.indexOf(symbol);
	
	while ( pos !== -1 ) {
		count++;
		pos = str.indexOf(symbol, pos + 1);
	}

	return count;
}


/* ---------------------------------------------- /*
 * Массивы.
/* ---------------------------------------------- */
function reverseArray (array) {
	return array.reverse();
}

function reverseArrayInPlace (array) {
	var newArray = [];

	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]); // or newArray[array.length - (i + 1)] = array[i]; 
	}

	return newArray;
}

function concatArray (array) {
	return array.reduce(
		function(a, b) { 
			return a.concat(b); 
		});
}


/* ---------------------------------------------- /*
 * Дата
/* ---------------------------------------------- */
var date = new Date(20125, 3, 24);

function getWeekDay(date) {
	var daysNames = ['вс','пн','вт','ср','чт','пт','сб'];

	return daysNames[date.getDay()]
}

function getLocalDay(date) {
	return date.getDay() + 1;
}

function getHundredDayAgo() {
	var daysNames = ['вс','пн','вт','ср','чт','пт','сб'],
	day = -100,
	hundredAgoDate = new Date(0, 0, day).getDate(),
	hundredAgoDay = new Date(0, 0, day).getDay();

	return 'Дата ' + hundredAgoDate + ' | День ' + daysNames[hundredAgoDay];
}

function getLastDayInMonth(year, month) {
	return new Date(year, month, -0.5).getDate();
}


/* ---------------------------------------------- /*
 * Вызовы функций через консоль
/* ---------------------------------------------- */
// getBoard(5,5);
// countBs('aBcdBefBghByti');
// countChars('agcdGefGghGytgi', 'g');
// reverseArray(['A','B','C','D','E','F']);
// reverseArrayInPlace([7,6,5,4,3,2,1]);
// concatArray([[1, 2, 3], [4, 5], [6]]);
// getWeekDay(date);
// getHundredDayAgo();
// getLastDayInMonth(2015,3);
'use strict';

var baraban,
	point, 
	intface,	
	intfaceText, 
	barabanStatus,
	hiddenWord,
	balls,
	deg, 
	degPoint,
	totalPoints,
	letterCount;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSettings () {
	baraban = document.querySelector('#baraban');
	barabanStatus = false;
	hiddenWord = [];
	balls = [];
	deg = 0; 
	degPoint = 0;
	totalPoints = 0;
	letterCount = 0;
	baraban.addEventListener('click', barabanClick, false);
	clearInterface('lettersList');
	clearInterface('question');
	showTotalPoints();
}

function getSimbolArray (string) {
	for (var i = 0; i < string.length; i++) {
		hiddenWord[i] = string.slice(i, i + 1);
	};
	return hiddenWord;
}

function genIntElement (place, element, className, text, value) {
	intface = document.createElement(element);
	intface.className = className;
	intfaceText = document.createTextNode(text + value);
	intface.appendChild(intfaceText);
	document.getElementById(place).appendChild(intface);
}

function clearInterface (place) {
	intface = document.getElementById(place);
	intface.innerHTML = '';
}

function clearInpute () {
	document.getElementById('inputeUser').value = '';
}

function getPoints() {
	var randomNum;
	balls = [];
	randomNum = getRandomInt(0, points.length - 1);
	point = points[randomNum][0];
	balls.push(point);
	degPoint = points[randomNum][1];
	balls.push(degPoint);	
	return balls;
}

function showTotalPoints () {
	intface = document.getElementById('totalPoints');			
	intface.innerHTML = totalPoints;
}

function barabanClick() {
	if (!barabanStatus) {
		getPoints();
		this.removeAttribute('style');
		deg = parseInt(balls[1]);
		degPoint = parseInt(balls[0]);
		var css = '-webkit-transform: rotate(' + deg + 'deg); -moz-transform: rotate(' + deg + 'deg); transform: rotate(' + deg + 'deg);';
		this.setAttribute('style', css);
		document.getElementById('inputeUser').focus();
		if (degPoint !== 0) {
			barabanStatus = true;	
		} else {
			setTimeout(function(){alert('У Вас 0. Вы банкрот! Крутите ещё раз.')}, 2000);
		}
	} else {
		alert('Вы уже крутили барабан! Теперь отгадайте букву или слово целиком!')
	}
}

function startGame () {
	var randomNum;
	getSettings();
	randomNum = getRandomInt(0, words.length - 1);
	var tempQues = words[randomNum][0],
		tempArray = getSimbolArray(words[randomNum][1]);
	for (var i = 0; i < tempArray.length; i++) {
		genIntElement('lettersList', 'li', 'is-closed', '', tempArray[i]);
	};
	genIntElement('question', 'p', '', '', tempQues);
}

function openLetters () {
	var inptUser = document.getElementById('inputeUser').value, 
		str = '',
		letterStatus = false,
		list = document.getElementById('lettersList');
	if (barabanStatus) {
		if (inptUser.length !== 0) {
			barabanStatus = false;
			for (var i = 0; i < hiddenWord.length; i++) {
				if (hiddenWord[i].toLowerCase() == inptUser.toLowerCase()) {
					list.childNodes[i].className = '';
					++letterCount;
					totalPoints += degPoint;
					letterStatus = true;
				}
			};
			if (inptUser.length > 1) {
				for (var i = 0; i < hiddenWord.length; i++) {
					letterStatus = true;
					str += hiddenWord[i];
				};
				if (str.toLowerCase() == inptUser.toLowerCase()) {
					
					for (var i = 0; i < hiddenWord.length; i++) {
						list.childNodes[i].className = '';
					};
					letterCount = hiddenWord.length;
					totalPoints += 1000;
					showTotalPoints();
				} else {
					alert('Вы ошиблись! Ваш ответ не верен!');
					totalPoints -= 200;
					showTotalPoints();
				}
			}
			if (!letterStatus) { 
				alert('Вы ошиблись! Нет такой буквы!');
			};
		} else {
			alert('Введите букву или слово целиком!');
		}
	} else {
		alert('Сначала покрутите барабан!');
	}
	if (letterCount === hiddenWord.length) { 
		alert('Вы победили!!! Игра завершена!');
	};
	clearInpute();
	showTotalPoints();
}
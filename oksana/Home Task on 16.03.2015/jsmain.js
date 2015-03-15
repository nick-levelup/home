'use strict'

var newWord = [], 
count = 1, 
guessnum, randomCountryArray, 
userWord, 
empty = "_",
min = 0, 
max = array.length - 1;


// функция генерации слова из списка стран - 1 шаг, возвращает массив из пустых ячеек

 function generateWord () {
 	var randomCountry,
 		rand = min + Math.floor( Math.random() * (max+1-min));

	randomCountry = array[rand]; //выбираем слово
	randomCountryArray = randomCountry.split("");//заносим слово в массив по буквам
	randomCountryArray[0] = randomCountryArray[0].toLowerCase();// первую букву переводим в нижний регистр

	return randomCountryArray;
}

function emptyArr (randomCountryArray) {
	var emptyArray = [];
 	for (var i = 1; i <= randomCountryArray.length - 1; i++) { // вывод _ вместо букв
	
		newWord.length = randomCountryArray.length;

		for (var a = 0; a <= newWord.length - 1; a++) { // создаем пустой массив 
			emptyArray[a] = empty;// массив состоит из _
			newWord[a] = emptyArray[a];
			}
	}

		alert("Угадайте страну, название которой состоит из " + randomCountryArray.length + " букв\n" + newWord);

	return newWord;
 }

// ввод буквы пользователем, - 2 шаг, возвращает букву

function getWord () { 
		userWord = prompt("Введите одну букву, чтобы угадать название страны!");
		userWord = userWord.split("");
			if (userWord.length > 1) { // если ввел более одной буквы
				getWord();
			} else {
				userWord = userWord[0];
				return userWord;
			}
	}

// функция для поиска буквы в массиве, 3 шаг - возвращает массив с найденными буквами

function findLetter (userWord, newWord, randomCountryArray) { 

	for (var j = 0; j <= randomCountryArray.length - 1; j++) {
		if (randomCountryArray[j] === userWord) {
			newWord[j] = userWord;
		} 
	}
	return newWord;
}

 // функция подсчета пустых ячеек в массиве, 4 - шаг возвращает кол-во

function allIndexOf (newWord, empty) {
	var position = 0,
		count = 0;
	while(true) {
		var indexArray = newWord.indexOf(empty, position); // -1 OR index

		if (indexArray === -1) { break };

		position = indexArray + 1;

		count++;
	}
	return count;
}

function start () {
	generateWord();
	emptyArr (randomCountryArray);
	startGame(count);
}

function startGame (count) {

	while(count > 0) {
		getWord();
		findLetter(userWord, newWord, randomCountryArray);
		guessnum = count;
		allIndexOf(newWord, empty);

		if (count === newWord.length || count > guessnum) {
			alert("Такой буквы нет в этом слове!");
		} else {
			alert("Вы угадали, буква " + userWord + " есть в названии этой страны!\n" + newWord);
		}
	}
	alert("Поздравляем! Вы угадали название страны!");
}

start ();
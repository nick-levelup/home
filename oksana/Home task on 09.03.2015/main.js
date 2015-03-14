'use strict'

var	result, RandomInt, scored, 
	totalScored = 0,
	tryes = 0, // счетчик попыток угадывания
	stopGame = 50, // максимальное значение очков, конец игры
	min = 1, // минимальное значение интервала для рандома
	max = 20; // максмальное значение интервала для рандома



function getRandomInt(min, max) {
	RandomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  	return RandomInt;
}

 function getUserAnsver() {
 	var	userNumber = prompt('Введите число от 1 до 20');

 	if (userNumber !== null) { //не нажал Отмена а вел число
		result = parseInt(userNumber);					
 	} else {
 		result = null;
 	}
		return result;												
 	}

function checkNumber(result, RandomInt) {
	var guessNumber;

	guessNumber = result - RandomInt;

	switch(guessNumber) {
		case 0: // угадал
			scored = 20;
			alert('Вы угадали число!')
			break;
		case 1:
		case -1:
			scored = 15;
			break;
		case 2:
		case -2:
			scored = 10;
			break;
		case 3:
		case -3:
		case 4:
		case -4:
		case 5:
		case -5:
			scored = 3;
			break;
		case 6:
		case -6:
		case 7:
		case -7:
		case 8:
		case -8:
		case 9:
		case -9:
		case 10:
		case -10:
			scored = 1;
			break;
		default:
			scored = 0;
		}
		return scored;
	}


function getTotalScored(scored) {
	var endGame = 0;
	totalScored += scored;
	endGame = stopGame - totalScored;
	if (endGame > 0) {
		alert('Вы заработали ' + scored + ' баллов\nВам осталось заработать ' + endGame + ' баллов');
	} else {
		alert('Вы заработали ' + scored + ' баллов');
	}

	return totalScored;
}



function startGame () {
	while (totalScored <= stopGame) {
		getRandomInt(min, max);//получаем число рандомное
		getUserAnsver();// проверяем рузультат
		if (result === null) {
			alert('Игра окончена!')
			break;
		}
		checkNumber(result, RandomInt);//присваиваем очки
		getTotalScored(scored);
		tryes++;//считаем очки и выводим ответ пользователю
	}
	alert('Вы прошли игру за ' + tryes + ' шагов');
}

alert(startGame());


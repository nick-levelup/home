var points;
var totalResalt=0;
var num;

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gess() {
num = prompt('Введите число от 1 до 20');
return num = +num;
}
function sum() {
totalResalt = totalResalt + points;
return totalResalt;
}


while(totalResalt < 50) {
var x = getRandomInt(1, 20);
	gess();
	switch (num) {
		case x:
		points = 20;
		sum();
		alert('Вы угадали число! ' + x + '\n' + 
			'+20 баллов в вашу копилку. \n Итого: ' + totalResalt); 
			continue;


		case x-1:
		case x+1:
		points = 15;
		sum();
		alert('Вы ошиблись на один балл. Верный ответ: ' + x + '\n' + 
			'+15 баллов в вашу копилку. \n Итого: ' + totalResalt);
			 continue;

		case x-2:
		case x+2:
		points = 10;
		sum();
		alert('Вы ошиблись на два балла. Верный ответ: ' + x + '\n' + 
			'+10 баллов в вашу копилку. \n Итого: ' + totalResalt);
			continue;

		case x-4:
		case x-3:
		case x+4:
		case x+3:
		points = 3;
		sum();
		alert('Вы ошиблись на 25%. Верный ответ: ' + x + '\n' + 
			'+3 балла в вашу копилку. \n Итого: ' + totalResalt); 
		continue;

		case x-10:
		case x-9:
		case x-8:
		case x-7:
		case x-6:
		case x-5:
		case x+10:
		case x+9:
		case x+8:
		case x+7:
		case x+6:
		case x+5:
		points = 1;
		sum();
		alert('Вы ошиблись на 50%. Верный ответ: ' + x + '\n' + 
			'+1 балл в вашу копилку. \n Итого: ' + totalResalt); 
		continue;

		default:
		points = 0;
		alert('Не угадали!');
	}

}
alert('Поздравляем! Вы набрали 50 баллов!');
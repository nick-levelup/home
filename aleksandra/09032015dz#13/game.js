var num, step, scorePoints, numRandom, points;


while (true) {
	//Начало игры 
	getStart();
}


// Функция начало игры
function getStart() {

scorePoints = 50;
step = 0;
points = 0;
pointsNum = 0;
pointsEsc = 0;
 
	while (points <= 50) {

	//Функция вызова рендома
	numRandom = getRandomInt(1,20);

    
	num = prompt("Угадай число от 1 до 20",'');
	num = +num;
	step = step + 1;

	if (num === null || num === '') {    //Отмена игроком
   		break;
	}  

	//Функция подсчета баллов 
	points = countPoints(num,numRandom,points);

	pointsNum = pointsNum + points;
	pointsEsc = (pointsNum <= 50 ) ? (50 - pointsNum) : '0';

	//Вывод информации в консоль для пользователя, о то сколько он заработал балов за ход и сколько ему еще балов осталось
    //console.log("Набрано баллов за ход - " + points + ". Осталось набрать еще баллов - " + pointsEsc);
    alert("Набрано баллов за ход - " + points + ". Осталось набрать еще баллов - " +  pointsEsc);

   
    if (pointsNum >= scorePoints) {     //Набрано уже необходимое количество очков 50, прекращаем игру    
       alert("Игра закончена! Набрано необходимое количество очков за шагов - " +step);
   	   break;
	}  

	}

    return false;
}


//Функция подсчета очков
function countPoints(num,numRandom,points) {

   var points = 0;
   if (num === numRandom) {
   	points = points +20;
   	alert("Точно угадал число " + numRandom); 
   } else {
   	    if (num === numRandom+1 || num === numRandom-1) {
   			points = points +15;
   		}
   		if (num === numRandom+2 || num === numRandom-2) {
   			points = points +15;
   		}
   		if (num === numRandom+3 || num === numRandom-3 || num === numRandom+4 || num === numRandom-4) {
   			points = points +3;
   		}
   		if (num === numRandom+5 || num === numRandom-5 || num === numRandom+6 || num === numRandom-6 ||
   			num === numRandom+7 || num === numRandom-7 || num === numRandom+8 || num === numRandom-8 ||
   			num === numRandom+9 || num === numRandom-9 || num === numRandom+10 || num === numRandom-10) {
   			points = points +1;
   		}
   		else {
   			points = points +0;
   		}
   }
   return points;
}


//функция рендома
function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


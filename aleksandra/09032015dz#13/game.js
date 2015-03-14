var num, step, scorePoints, numRandom, points;


while (true) {
	//Начало игры 
	getStart();
}


// Функция начало игры
function getStart() {

scorePoints = 50;
step = 0; points = 0; pointsNum = 0; pointsEsc = 0;
minNum = 1; maxNum = 20;

 
	while (points <= scorePoints) {

		//Функция вызова рендома
		numRandom = getRandomInt(minNum,maxNum);

    
		num = prompt("Угадай число от " + minNum +  " до " + maxNum ,'');
		num = +num;
		step = step + 1;

		if (num === null || num === '') {    //Отмена игроком
   			break;
		}  

		//Функция подсчета баллов 
		points = countPoints(num,numRandom,points);

		pointsNum = pointsNum + points;
		pointsEsc = (pointsNum <= scorePoints ) ? (scorePoints - pointsNum) : '0';

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

    switch (num) {
  		case numRandom:
  			points = points +20;
    		alert("Точно угадал число " + numRandom); 
    		break;
  		case numRandom+1:
  		case numRandom-1:
    		points = points +15;
   			break;
  		case numRandom+2:
  		case numRandom-2:
    		points = points +10;
    		break;
    	case numRandom+3:
  		case numRandom-3:
  		case numRandom+4:
  		case numRandom-4:
    		points = points +3;
    		break;
    	case numRandom+5:
  		case numRandom-5:
  		case numRandom+6:
  		case numRandom-6:
  		case numRandom+7:
  		case numRandom-7:
  		case numRandom+8:
  		case numRandom-8:
  		case numRandom+9:
  		case numRandom-9:
  		case numRandom+10:
  		case numRandom-10:
    		points = points +1;
    		break;
  		default:
    		points = points +0;
	}
	return points;
}


//функция рендома
function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


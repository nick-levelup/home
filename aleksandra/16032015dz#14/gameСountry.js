'use strict'

//функция рендома 
function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

startGame();


function startGame() {
	getStart(); //функция вызова начало игры 
}


// Функция начало игры
function getStart() {

  var scorePoints = 50;
  var step = 0; 
  var points = 0; 
  var pointsNum = 0; 
  var pointsEsc = 0;
  var formatLetter = '_';

  //выбирается случайная страна из массива 
  var randomCountry = Math.floor(Math.random()*arrayCountry.length);

  var hiddenWord = arrayCountry[randomCountry]; //получаем загаданное слово

  var hiddenWord = hiddenWord.toUpperCase();  // получаем строку с загаданным словом большие символы

  //alert(hiddenWord);

  //Предоставляем угадать слово пользователю
  var newArray = []; //создаем пустой массив для вывода слова
  var userCountry = [];   

  newArray.length = hiddenWord.length;

  //пользователю показывается количество букв в слове в формате [ _ _ _ _ _ ]
  for (var i=0; i<newArray.length; i++) {
    userCountry[i]= '_';
    newArray[i]= userCountry[i];
  }

  alert("Угадайте страну из " + hiddenWord.length+ " букв " + newArray.join(' ')); 


  //цикл проверки наличия буквы в слове
  while(newArray.indexOf(formatLetter) >= 0) {

    var letterArr = prompt("Введите букву", '');

    if (letterArr != null && letterArr.length > 1) {
      letterArr = prompt("Укажите лишь одну букву", '');
    }
    
    //если буква угадана, пользователю это сообщается и показывается место где она стоит 
    for (var i=0; i<hiddenWord.length; i++) {

      if ( hiddenWord[i] === letterArr.charAt(0).toUpperCase() ) {
          newArray[i] = letterArr.charAt(0).toUpperCase();
      } 
    }

     //Сообщаем пользователю об наличии буквы в слове
    if (newArray.indexOf(letterArr.charAt(0).toUpperCase()) >= 0 ) {
        alert("Такая буква - " + letterArr + " есть в слове " + newArray.join(' '));
    } else {
        alert("Такой буквы - " + letterArr + " нет в слове " + newArray.join(' '));
      }
  }
    alert("Поздравляем Вы угадали слово - " + newArray.join(' '));

}

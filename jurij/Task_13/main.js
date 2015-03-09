var num,        //загаданное число
    numUser,    //ответ пользователя
    count = 0,  //количество попыток
    score,      //количество баллов за одну попытку
    total = 0;      //общее количество баллов за игру

var LIMIT_TOTAL = 50; //ограничение в баллах за игру


document.getElementById("checkNum").onclick = function() {
  askNumUser();
}
document.getElementById("cancel").onclick = function() {
   window.location.reload()
};

function askNumUser () {
  num  = getRandomInt(1, 20);
  count++;
  check = document.getElementById("warning");
  numUser = document.getElementById("numUser").value;

  if ((numUser < 1 || numUser > 20 || numUser === '') && numUser !== null) {
    check.setAttribute('style', 'display: block;');
  } else {
      if (isNaN(numUser)) {
        check.setAttribute('style', 'display: block;'); 
      } else {
        check.setAttribute('style', 'display: none;');
        getScore();
      }
  }
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getScore () {
  var diff = 0;

  diff = numUser - num;  

  switch (diff) {
    case 0:
      score = 20;
      break;
    
    case 1:
    case -1:
      score = 15;
      break;

    case 2:
    case 3:
    case -2:
    case -3:
      score = 10;
      break;

    case 4:
    case 5:
    case -4:
    case -5:
      score = 3;
      break;

    case 6:
    case 7:
    case 8:
    case 8:
    case 10:
    case -6:
    case -7:
    case -8:
    case -9:
    case -10:
      score = 1;
      break;

    default:
      score = 0;
      break;
  }
  checkTotal(); 
}

function checkTotal() {
    if (total < LIMIT_TOTAL) {
      countRes = document.getElementById("countRes");
      countRes.innerHTML = "";
      countRes.setAttribute('style', 'display: block;')

      text = document.createTextNode('Вы заработали ' + score + ' баллов');
      countRes.appendChild(text);

      totalScore = document.getElementById("totalScore");
      total += score;
      totalScore.setAttribute('style', 'width: ' + (total/LIMIT_TOTAL)*100 + '%');
      totalScore.innerHTML = total;
    } 
    else {
      countTry = document.getElementById("count");
      countTry.setAttribute('style', 'display: block;')
      text = document.createTextNode('Вам понадобилось ' + count + ' попыток');
      countTry.appendChild(text);
    }
}
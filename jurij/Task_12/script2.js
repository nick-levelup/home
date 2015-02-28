var AGE_MIN = 14,
    AGE_MAX = 90,
    userAge;

userAge = prompt('Введите ваш возраст:');
userAge = +userAge; //численное преобразование

if ((userAge >= AGE_MIN) && (userAge <= AGE_MAX)) {
  alert('Добро пожаловать на наш сайт!');
} else {
  alert('Пока!');
}



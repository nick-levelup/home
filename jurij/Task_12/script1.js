var num;

num = prompt('Введите число:');
num = +num; //численное преобразование

if (num == 1) {
  alert('Равно 1');
} else {
    if (num < 1) {
      alert('Меньше 1');
    }
    if (num > 1) {
      alert('Больше 1');
    }
}

//2-й вариант решения
/*
if (num != 1) {
  if (num > 1) {
    alert('Больше 1');
  } else {
      alert('Меньше 1');
    }
} else {
    alert('Равно 1');
}
*/
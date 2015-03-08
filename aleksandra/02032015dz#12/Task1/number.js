var num;

num = prompt("Введите число",'');
num = +num;


if (num === 1) {
	alert("Число равно 1");
} else if (num < 1) {
	alert("Число меньше 1");
} else if (num > 1) {
	alert("Число больше 1");
}
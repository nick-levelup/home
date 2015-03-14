var yearsOld,
	min = 14,
	max = 90;

yearsOld = +yearsOld;

yearsOld = prompt('Введите Ваш возраст');

if (yearsOld >= min && yearsOld <= 90) {
	alert('Добро пожаловать на наш сайт!');
} else {
	alert('Пока!');
}
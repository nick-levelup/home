var num = 1,
	userNum;

userNum = prompt('Ведите число');
userNum = +userNum;

if(userNum > num) {
	alert('Больше 1');
} else {
	if((userNum < num) && (userNum !== 0)) { // при нажатии на кнопку "отмена" приниматся значение 0;
	alert('Меньше 1');
	}
	if(userNum === num) {
	alert('Равно 1');
	}
}

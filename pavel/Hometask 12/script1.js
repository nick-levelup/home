var num = prompt('Введите число');
num = +num;

if(num < 1){
    alert('Меньше 1');
} else if(num > 1){
    alert('Больше 1');
} else{
    alert('Равно 1');
}
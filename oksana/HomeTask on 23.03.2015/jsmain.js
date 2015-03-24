//шахматная доска

var i = +prompt("Введите количество строк"),
	g = +prompt("Введите количество  столбцов"),
	desk = '', reshetka =  '#', space = ' ';

for (var k = 1; k <= i; k++) {
	for (var j = 1; j <= g; j++) {
		if (k % 2 === 0) {
			if (j % 2 === 0) {
				desk += reshetka;
			} else {
				desk += space;
			}
		} else {
			 if(j % 2 == 0) {
                    desk += space;
                } else {
                    desk += reshetka;
                }
            }
        }
        desk += '\n';
    }
		

console.log(desk);

// Напишите функцию countBs, которая принимает строку в качестве аргумента,
// и возвращает количество символов “B”, содержащихся в строке.
// Затем напишите функцию countChar, которая работает примерно как countBs,
// только принимает второй параметр — символ, который мы будем искать в
// строке (вместо того, чтобы просто считать количество символов “B”). Для
// этого переделайте функцию countBs.

var string = 'jhvbjbjbjbjjbhhbhbjkbgcgvb bvbhbhvvbbb', 
	symbol = 'h';

function countChar(str, symb) {
	var result = 0;
    for (var i = 0; i < str.length-1; i++) {
        if (str.charAt(i) == symb) {
           result++;
        }
    }
    return result;
}
// console.log(countChar(string, symbol))
countChar(string, symbol);

// У массивов есть метод reverse, меняющий порядок элементов в массиве на
// обратный. В качестве упражнения напишите две функции, reverseArray и
// reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый
// массив, с обратным порядком элементов. Вторая работает как оригинальный
// метод reverse – она меняет порядок элементов на обратный в том массиве,
// который был ей передан в качестве аргумента. Не используйте стандартный
// метод reverse.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reverseArray (array) {
	var reverseArr;
	reverseArr = array.reverse();
	return reverseArr;
}

function reverseArrayInPlace (array) {
	var revArray = [],
		k = 0;
	for (var i = array.length-1; i >= 0; i--) {
			revArray[k] = array[i];
			k++;
	}
	return revArray;
}
//Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.


var arrays = [[1, 2, 3], [4, 5], [6]];

var newArray = arrays.reduce(function(a, b) {
  return a.concat(b)});
 alert(newArray);
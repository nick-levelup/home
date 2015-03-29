'use strict'

/*1.Напишите программу, создающую строку, содержащую решётку 8х8, в
которой линии разделяются символами новой строки. На каждой позиции
либо пробел, либо #. В результате должна получиться шахматная доска. Сделайте размер доски переменным, чтобы можно было
создавать доски любого размера.

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #*/

function getStringGrid(sizeX,sizeY) {

	var newString = '';

	for (var i = 0; i < sizeX; i++) {
		
		for (var j = 0; j < sizeY; j++) {
		    if ((i + j) % 2 === 0) { 
		    	newString = newString + ' '; 
		    } else newString = newString +'#'; 
		};

		newString = newString + '\n';
	};
	return newString;
}



/*2.Напишите функцию countBs, которая принимает строку в качестве аргумента,
и возвращает количество символов “B”, содержащихся в строке.
Затем напишите функцию countChar, которая работает примерно как countBs,
только принимает второй параметр — символ, который мы будем искать в
строке (вместо того, чтобы просто считать количество символов “B”). Для
этого переделайте функцию countBs.*/

function countBs(string) {
	var numSymbol = 0;
	string = string.toUpperCase();

	var symbolStr = string.indexOf('B');

     	while ( symbolStr !== -1) {
     		numSymbol ++;
            symbolStr = string.indexOf('B',symbolStr+1);
     	}
 
  	return numSymbol;
}


function countChar(string,symbol) {

	var numSymbol = 0;
	string = string.toLowerCase();
	symbol = symbol.toLowerCase();

	var symbolStr = string.indexOf(symbol);

     	while ( symbolStr !== -1) {
     		numSymbol ++;
            symbolStr = string.indexOf(symbol,symbolStr+1);
     	}
 
  	return numSymbol;
}



/*3.У массивов есть метод reverse, меняющий порядок элементов в массиве на
обратный. В качестве упражнения напишите две функции, reverseArray и
reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый
массив, с обратным порядком элементов. Вторая работает как оригинальный
метод reverse – она меняет порядок элементов на обратный в том массиве,
который был ей передан в качестве аргумента. Не используйте стандартный
метод reverse.

console.log(reverseArray(["A", "B", "C"]));
// > ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// > [5, 4, 3, 2, 1]*/


function reverseArray (array) {
	return array.reverse();
}

function reverseArrayInPlace(array) {

	var newArray = [];

	for( var i = array.length; i--; ) {
	    newArray.push( array[i] );
	};

    return newArray;
}


/*4.Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.

var arrays = [[1, 2, 3], [4, 5], [6]];
// Ваш код тут
// > [1, 2, 3, 4, 5, 6]*/

function convolutionArray(array) {

	var newArray = [];


    var newArray = array.reduce(function(a, b) {
  		return a.concat(b);
	});

	return newArray;
}

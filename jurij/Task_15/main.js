//1
console.log(makeBoard1(4));
console.log(makeBoard2(4));

function makeBoard1(size) {
  var string = '';

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      //четный индекс - #, нечетный - ' '
      if ((i + j) % 2 === 0) {
        string += '#';
      } else {
        string += ' ';
      }
    }
    //после каждой итерации внешнего цикла - перенос строки
    string += '\n';
  }
  return string;
}

function makeBoard2(size) {
  var string = [];

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size/2; j++) {
      if (i % 2 === 0) {
        string.push('# ');
      } else {
        string.push(' #');
      }      
    }
    string.push('\n');  
  }  
  return string.join('');
}


//2
var str = 'abc abc abc',
    symb = 'c';
console.log(countChar(str, symb));

function countChar(string, symbol) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] == symbol) {
      count++;
    }
  }
  return count;
}

//3
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseArray(array));

function reverseArray(arr) {
  var newArr = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

//4
var array = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(array));

function reverseArrayInPlace(arr) {
  var length = arr.length, 
      lastIndex = length - 1,      
      halfIndex = Math.floor(length / 2),
      temp = 0;
  //меняем местами элементы, кроме "центрального"
  for (var i = 0; i < halfIndex; i++) {
    temp = arr[i];
    arr[i] = arr[lastIndex - i];
    arr[lastIndex - i] = temp;
  }
  return arr;
}

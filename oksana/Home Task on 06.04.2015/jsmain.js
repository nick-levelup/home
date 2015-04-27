// первая задача

function work(a) { 
  /*...*/ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
  return function (a) {
    log.push(a);
    return f.call(this, a);
  }
}

var log = [];
work = makeLogging(work, log);

work(1); 
work(5); 

for(var i=0; i<log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}



// вторая задача

function f(arg) {
  return Math.random()*arg; 
}

function makeCaching(f) { 
	var caching = {};

	return function (arg) {
	 if ( !(arg in caching)){
		caching[arg] = f.call(this, arg)
	}
	return caching[arg];
 }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b );//true

b = f(2);
alert( a == b ); // false

// третья задача


// outputDate( '2011-10-02' );  // 02.10.11
// outputDate( 1234567890 );  // 14.02.09
// outputDate( [2000,0,1] ); // 01.01.00
// outputDate( new Date(2000,0,1) ); // 01.01.00
function outputDate(date) {
  if (typeof date == 'number') {
    date = new Date(date*1000);
  } else if(typeof date == 'string') {
    date = date.split('-');
    date = new Date(date[0], date[1]-1, date[2]);
  } else if ( {}.toString.call(date) == '[object Array]' ) {
    date = new Date(date[0], date[1], date[2]);
  }

  var day = date.getDate();
  if (day < 10) day = '0' + day;

  var month = date.getMonth()+1;
  if (month < 10) month = '0' + month;

  var year = date.getFullYear() % 100; 
  if (year < 10) year = '0' + year;
  
  var formattedDate = day + '.' + month + '.' + year;

  alert(formattedDate);
}




// четвертая задача
// Создать конструктор Car

// Пример использования:

// var civic = new Car( "Honda Civic", 2009, 20000 );

// alert(civic); // Honda Civic has done 20000 miles

function Car (name1, year, miles) {
	this.name1 = name1;
	this.year = year;
	this.miles = miles;
	this.toString = function (){
		return this.name1 + " has done " + this.miles + "miles";
	}
	
}
var civic = new Car( "Honda Civic", 2009, 20000 );

alert(civic); // Honda Civic has done 20000 miles

// пятая задача

// Создать конструктор MacBook с двумя методами getCost и getScreenSize

function MacBook () {
	this.getCost = function () {
		var cost = 997;
		return cost;
	},
	this.getScreenSize = function () {
		var sSize = 11.6;
		return sSize;
	}
}
function memory (macBook) {
	var cost = macBook.getCost();
	return function () {
	 	macBook.cost += 75;
	 	return cost;
 	}
}
function engraving (macBook) {
	var cost = macBook.getCost();
	return function () {
	 	macBook.cost += 200;
	 	return cost;
	}
}
function insurance (macBook) {
	var cost = macBook.getCost();
	return function () {
	 	macBook.cost += 250;
	 	return cost;
	}
}

 var macBook = new MacBook();


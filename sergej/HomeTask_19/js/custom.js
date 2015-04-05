'use strict';

/* ---------------------------------------------- /*
 * Декораторы. Логирование
/* ---------------------------------------------- */
function work(a) {
    return a;
}
function makeLogging(fn, log) {
    return function () {
        return log.push(fn.apply(this, arguments));
    }
}

var log = [];
work = makeLogging(work, log);
work(1);
work(5);
work(3);
work(2);
work(10);

for(var i = 0; i < log.length; i++) {
    console.log('Лог:' + log[i]);
}


/* ---------------------------------------------- /*
 * Декораторы. Кеширование
/* ---------------------------------------------- */
function f(arg) {
    return Math.random()*arg;
}
function makeCaching(fn) {
    return function(n) {
        if (!(n in funcCache)) {
            funcCache[n] = fn.call(this, n);
        }
        return funcCache[n];
    };
}

f = makeCaching(f);
var a, b, funcCache = {};
a = f(1);
b = f(1);
console.log(a == b);
b = f(2);
console.log(a == b);
a = f(2);
console.log(a == b);


/* ---------------------------------------------- /*
 * Дата. Полиморфизм
/* ---------------------------------------------- */
function formatDate (date) {
    var day = date.getDate(),
        month = date.getMonth()+ 1,
        year = date.getFullYear() % 100;

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    if (year < 10) year = '0' + year;

    return day + '.' + month + '.' + year;
}

function outputDate(date) {
    var dateType = typeof date,
        dateObject = {}.toString.call(date);

    if (dateType == 'string') {
        date = date.split('-');
        date = new Date(date[0], date[1] - 1, date[2]);
        return formatDate(date);
    } else if (dateType == 'number') {
        date = new Date(date);
        return formatDate(date);
    } else if ( dateObject == '[object Array]' ) {
        date = new Date(date[0], date[1], date[2]);
        return formatDate(date);
    } else {
        return formatDate(date);
    }
}

console.log(outputDate( '2011-10-02' ));
console.log(outputDate( 1234567890 ));
console.log(outputDate( [2000,0,1] ));
console.log(outputDate( new Date(2000,0,1) ));


/* ---------------------------------------------- /*
 * Объекты. Свойства
/* ---------------------------------------------- */
function Car (modelName, year, mileage) {
    this.modelName = modelName;
    this.year = year;
    this.mileage = mileage;
    this.toString = function () {
        return this.modelName +' has gone ' + this.mileage +' miles in ' + this.year + '.';
    };
}

var civic = new Car("Honda Civic", 2009, 20000);

alert(civic);


/* ---------------------------------------------- /*
 * Объекты. Методы
/* ---------------------------------------------- */
function NoteBook (brand, model, type, screenSize, cost) {
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.screenSize = screenSize;
    this.cost = cost;
    this.toString = function () {
        return 'Brand: ' + this.brand +
              '\nModel: ' + this.model +
              '\nType: ' + this.type +
              '\nScreen size: ' +  this.screenSize + '"' +
              '\nCost: ' + this.cost + '$';
    };
    this.getScreenSize = function () {
        return this.screenSize + '"';
    };
    this.getCost = function () {
        return this.cost + '$';
    };
    this.changeValue = function(prop, value) {
      this[prop] = value;
    };
    this.addCost = function(value) {
        this.cost += value;
    };

}

function addMemory (notebook) {
    var memoryPrice = 75;
    return notebook.addCost(memoryPrice);
}

function addEngraving (notebook) {
    var engravingPrice = 200;
    return notebook.addCost(engravingPrice);
}

function addInsurance (notebook) {
    var insurancePrice = 250;
    return notebook.addCost(insurancePrice);
}

var macBook = new NoteBook("Apple", "MacBook", "Pro", 11.6, 997);

console.log(macBook);

addMemory(macBook);
addEngraving(macBook);
addInsurance(macBook);

console.log(macBook.getCost());
console.log(macBook.getScreenSize());

console.log('------------------');

macBook.changeValue('brand', 'Asus');
macBook.changeValue('model', 'RG-500');
macBook.changeValue('type', 'Gamers');
macBook.changeValue('screenSize', 17);
macBook.changeValue('coast', 5000);
macBook.addCost(1333);

console.log(macBook);
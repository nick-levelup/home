
/*1.Создайте декоратор makeLogging(f, log), который берет
функцию f и массив log.

Он должен возвращать обёртку вокруг f, которая при каждом
вызове записывает («логирует») аргументы в log, а затем передает
вызов в f.

В этой задаче можно считать, что у функции f ровно один аргумент.*/


function work(a) {
  /*...*/ // work - произвольная функция, один аргумент
}
 
function makeLogging(f, log) {
 
  function wrapper(a) {
    log.push(a);
    return f.call(this, a);  
  }
 
  return wrapper;
}
 
var log = [];
work = makeLogging(work, log);
 
work(1); // 1
work(5); // 5
 
for(var i=0; i<log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}


/*2 Создайте декоратор makeCaching(f), который берет функцию f и
возвращает обертку, которая кеширует её результаты.

В этой задаче функция f имеет только один аргумент, и он является числом.

При первом вызове обертки с определенным аргументом — она
вызывает f и запоминает значение.
При втором и последующих вызовах с тем же аргументом
возвращается запомненное значение.

Должно работать так:
показать чистый исходник в новом окнеСкрыть/показать номера
строкпечать кода с сохранением подсветки*/




/*3.Напишите функцию outputDate(date), которая выводит дату в формате dd.mm.yy.

Ее первый аргумент должен содержать дату в одном из видов:

Как объект Date.
Как строку в формате yyyy-mm-dd.
Как число секунд с 01.01.1970.
Как массив [гггг, мм, дд], месяц начинается с нуля

Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.*/

function outputDate(date) {
  if (typeof date == 'number') { //преобразование даты из числа
    date = new Date(date*1000);

  } else if (typeof date == 'string') { //преобразование даты из строки
    date = date.split('-');
    date = new Date(date[0], date[1]-1, date[2]);

  } else if ( {}.toString.call(date) == '[object Array]' ) { //преобразование даты из массива
    date = new Date(date[0], date[1], date[2]);
  }
 
  var valueday = date.getDate();
  if (valueday < 10) valueday = '0' + valueday; //прибавляем к числу дня вначале 0, если число дня однозначное
 
  var valuemonth = date.getMonth()+1;
  if (valuemonth < 10) valuemonth = '0' + valuemonth; //прибавляем к числу месяца вначале 0, если число месяца однозначное
 
  var valueyear = date.getFullYear() % 100;
  if (valueyear < 10) valueyear = '0' + valueyear;
   
  var resDate = valueday + '.' + valuemonth + '.' + valueyear;
 
  alert(resDate);
}
 
outputDate('2011-10-02'); 
outputDate(1234567890);  
outputDate( [2000,0,1] ); 
outputDate(new Date(2000,0,1)); 



/*4.Создать конструктор Car

Пример использования:

var civic = new Car( "Honda Civic", 2009, 20000 );

alert(civic); // Honda Civic has done 20000 miles*/


function Car(auto, year, miles) {
 
  this.auto = auto;
  this.year = year;
  this.miles = miles;
 
  this.toString = function() {
    return this.auto + " has done "+ this.miles + " miles";
  };
}
 
var civic = new Car("Honda Civic", 2009, 20000);

alert(civic); // Honda Civic has done 20000 miles



/*5. Создать конструктор MacBook с двумя методами getCost и getScreenSize

var macBook = new MacBook();

macBook.getCost() // 997
macBook.getScreenSize() // 11.6*/


function MacBook(){
    this.getCost = function(){
      return 997;
    };

    this.getScreenSize = function(){
      return 11.6;
    };
}

var macBook = new MacBook();

macBook.getCost(); 
macBook.getScreenSize();


/*6.Создать три декоратора, после применения которых, экземпляр увеличивает свою стоимость
Декораторы (названия и цена на которую увеличиться цена)

    memory 75 (память)
    engraving 200 (гравировка)
    insurance 250 (страховка)

Пример

var macBook = new MacBook();

memory(macBook);
engraving(macBook);
insurance(macBook);

console.log(macBook.getCost()); // Outputs: 1522
console.log(macBook.getScreenSize()); // Outputs: 11.6*/


function MacBook(){
    this.getCost = function(){
      return 997;
    };

    this.getScreenSize = function(){
      return 11.6;
    };
}

function memory(macbook){
    this.getCost = function(){
     return macbook.getCost() + 75;
  };
}

function engraving(macbook){
    this.getCost = function(){
      return macbook.getCost() + 200;
    };
}

function insurance(macbook){
    this.getCost = function(){
      return macbook.getCost() + 250;
    };
}
 
var macBook = new MacBook();

memory(macBook);
engraving(macBook);
insurance(macBook);


var myMacbook = new insurance(new engraving(new memory(new MacBook())));
console.log(myMacbook.getCost()); //Outputs: 1522

//console.log(macBook.getCost()); // Outputs: 1522
console.log(macBook.getScreenSize()); // Outputs: 11.6*/
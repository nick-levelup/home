'use strict'


/* 1.Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
Временная зона — местная. Выведите его на экран.
*/

var dateN = new Date(2012,2,20,3,12);
alert(dateN);



/* 2.Создайте функцию getWeekDay(date), которая выводит текущий день
недели в коротком формате ‘пн’, ‘вт’, … ‘вс’.
*/
	var date = new Date(2012,0,3);
	alert ( getWeekDay(date) );
ы

function getWeekDay(date) {

	var day = date.getDay();
    var dayArr = ['вс','пн','вт','ср','чт','пт','сб'];

    return dayArr[day];
}


/* 3.Напишите функцию, getLocalDay(date) которая возвращает
день недели для даты date.
День нужно возвратить в европейской нумерации, т.е.
понедельник имеет номер 1, вторник номер 2, …, воскресенье - номер 7.
var date = new Date(2012, 0, 3); // 3 янв 2012
alert( getLocalDay(date) ); // 2
*/
	alert( getLocalDay(date) );


function getLocalDay(date) {
	var day = date.getDay();

	if (day === 0) {
		day = "7";
	}
	return day;
}

/*4.Какое число месяца было 100 дней назад? Какой день недели?*/

var date1 = new Date;
date1.setDate( date1.getDate() - 100 );
 
alert( date1.getDate() );
 
var dateDay = ['вс','пн','вт','ср','чт','пт','сб'];
alert( dateDay[date1.getDay()] );



/* 5.Напишите функцию getLastDayInMonth(year, month),
которая возвращает последний день месяца.*/

function getLastDayInMonth(year, month) {
	var dateDay = new Date(year, month+1, 0);

	return dateDay.getDate();
}

alert (getLastDayInMonth(2012, 1) );


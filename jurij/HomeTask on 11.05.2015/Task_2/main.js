'use strict';

// ОПЦИИ СООБЩЕНИЯ
// =============================
var options = {
	autoShow: true,
	text: "I'm alert message!",
	autoHide: 3000,
	position: 'rt',
	type: ''
};

// ОБРАБОТЧИКИ СОБЫТИЙ ДОКУМЕНТА
// =============================
var btnGroup = document.querySelector( '.btn-group' );

btnGroup.addEventListener('click', function( event ) {
	if ( event.target.tagName !== 'BUTTON' ) return;
	
	if ( options.type === '') {
		options.type = setTypeAlert( event.target.className );
	}
	
	msg.create( options );
});


// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// =============================

function setTypeAlert( string ) {

	var classAlert = {
			'success': 'alert-success',
			'info': 'alert-info',
			'warning': 'alert-warning',
			'danger': 'alert-danger'
		};

	for ( var key in classAlert ) {
		if ( string.indexOf( key ) !== -1 ) {
			return classAlert[key];
		}
	}	
}
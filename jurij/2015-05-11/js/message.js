
'use strict';

var msg = (function() {

	var alertMsg,
		closeBtn,
		timer;

	function create (options) {

		alertMsg = document.querySelector( 'div.alert' );

		// перед созданием нового сообщения скроем и удалим предыдущее сообщение
		if (alertMsg) msg.hide();

		alertMsg = document.createElement( 'DIV' );
		closeBtn = document.createElement( 'BUTTON' );

		alertMsg.classList.add( 'alert' );
		alertMsg.classList.add( options.type );
		alertMsg.classList.add( options.position );
		alertMsg.innerHTML = options.text;
		document.body.appendChild( alertMsg );

		closeBtn.classList.add( 'closeBtn' );
		closeBtn.innerHTML = '&times;';
		alertMsg.appendChild( closeBtn );
		
		// обнулим тип сообщения для последующих вызовов
		options.type = '';

		if ( options.autoShow ) msg.show();		
	}	

	function show () {
		alertMsg.classList.add( 'is-show' );
		bind();
	}

	function hide () {
		alertMsg.classList.remove( 'is-show' );
		unbind();
		document.body.removeChild( alertMsg );
	}

	function bind () {
		closeBtn.addEventListener( 'click', msg.hide );
		if ( options.autoHide ) {
			timer = setTimeout( msg.hide, options.autoHide );
		}
	}

	function unbind () {
		closeBtn.removeEventListener( 'click', msg.hide );
		if ( options.autoHide ) clearTimeout( timer );
	}


	return {
		create: create,
		show: show,
		hide: hide
	};
	
}());
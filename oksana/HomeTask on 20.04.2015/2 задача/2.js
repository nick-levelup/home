var elem = document.body.children;

function attr (elem){
	for (var i = 0; i < elem.length; i++) {
		if (elem[i].getAttribute('data-classified') === 'secret') {
			elem[i].setAttribute('data-code', '0101');
		}
	}
}

attr(elem);



var $buttons = $('.buttons').find('li'),
$main = $('article'),
$removeBtn = $('.remove-all');

$removeBtn.on('click', removeAll);

$buttons.on('click', function (event) {
	var dataClass = $(this).data('name');

	removeAll();

	event.preventDefault();

	if(dataClass.split(' ').length > 1) { alert('remove spaces from attr value'); return;}
	if(dataClass === '') { alert('attr value is empty'); return;}


	$main
	.addClass(dataClass)
	.addClass('is-active');


	var selector = getStyleSelector(dataClass),
			$el = $(selector);

	if (selector && $el.length) {
    $('html, body').animate({
			scrollTop: $el.eq(0).offset().top
    }, 1000);
	};
});

function removeAll () {
	$main.removeAttr('class');
	$buttons.removeClass('is-active');
};

function getStyleSelector (dataClass) {
	for (var i = 0; i < document.styleSheets[2].cssRules.length; i++) {
		var style = document.styleSheets[2].cssRules[i];

		if (style.selectorText.indexOf('.' + dataClass) === 0) {
			return style.selectorText
		};
	};
};
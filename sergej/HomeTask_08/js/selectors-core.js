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
});

function removeAll () {
	$main.removeAttr('class');
	$buttons.removeClass('is-active');
};
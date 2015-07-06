var input = document.querySelector('input'),
	btn = document.querySelector('button'),
	xhr = new XMLHttpRequest(),
	url = 'https://api.github.com/search/users?q=',
	data = {};

Handlebars.registerHelper('list', function(items, options) {
	var out = '<ul>';
	for (var i = 0; i < items.length; i++) {
		out = out + '<li>' + options.fn(items[i]) + '</li>';
	}

	return out + '</ul>'
});

btn.addEventListener('click', function() {
	var div = document.querySelector('div');
	if (div) {
		document.body.removeChild(div);
	}
	xhr.open('GET', 'https://api.github.com/search/users?q=' + input.value, true);	
	xhr.send();

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var obj = JSON.parse(xhr.responseText),
					usrListTmpl = document.querySelector('#userList-tmpl').innerHTML,
					data = {
						users: obj.items
					},
					compileTmpl = Handlebars.compile(usrListTmpl),
					html = compileTmpl(data);
					document.body.insertAdjacentHTML('beforeEnd', html);
			} else {
				alert('Error ' + xhr.status + ' ' + xhr.statusText);
			}
		}
	}
});
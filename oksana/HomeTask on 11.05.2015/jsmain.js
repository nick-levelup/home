	'use strict'

	function Message (config) {
		var text1 = "<b>Well done! </b>You successfully read this important alert message.",
			text2 = "<b>Heads up! </b>This alert needs your attention, but it's not super important.",
			text3 = "<b>Oh snap! </b>Change a few things up and try submitting again.",
			span;

		this.html = [
		'<div class="buttom">',
			'<div class="esk"><span>x</span></div>',
				'<div>',
					'<span></span>',
				'</div>',
			'</div>',
		'</div>'].join('');

		this.init = function () {
            var self = this;
            
			this.appendHTML();
            
            span = this.el.querySelectorAll('span')[1];
            
			this.addClass(config.value);
            
            this.show();
            
            setTimeout(function () {self.hide()}, 6000);
		}

		this.appendHTML = function  () {
			var div = document.createElement('div');
			div.innerHTML = this.html;
			this.el = div.firstChild;
			document.body.insertAdjacentElement('beforeend', this.el);
		}

		this.show = function () {
			this.el.classList.add('isShow');
			this.bind();
		}

		this.hide = function () {
			this.el.classList.remove('isShow');
			this.unbind();
		}

		this.bind = function () {
			var self = this;
			this.el.querySelector('.esk')
			.addEventListener('click', function () {
				self.hide.apply(self, arguments);
			})
		}

		this.unbind = function () {
			this.el.querySelector('.esk')
			.removeEventListener('click', this.hide)
		}

		this.addClass = function (value) {
			this.el.classList.add(value || '');
			if (value === 'well-done') {
				span.innerHTML = text1;
			}
			if (value === 'heads-up') {
				span.innerHTML = text2;
			}
			if (value === 'oh-snap') {
				span.innerHTML = text3;
			}
		}
};



var message1 = new Message({value: 'well-done'});//создаем объект Message  уже должен быть с правильным текстом 
var message2 = new Message({value: 'heads-up'});
var message3 = new Message({value: 'oh-snap'});

document.querySelectorAll('button')[0].addEventListener('click', function() {message1.init.apply(message1)})
document.querySelectorAll('button')[1].addEventListener('click', function() {message2.init.apply(message2)})
document.querySelectorAll('button')[2].addEventListener('click', function() {message3.init.apply(message3)})



"use strict";

function Message() {
    this.create = function (config) {
        var autoShow = config.autoShow,
            text = config.text,
            autoHide = config.autoHide,
            position = config.position,
            type = config.type,
            html = ['<div class="message ' + position + '">',
                '<div class="title">',
                '<i class="ico ' + type + '"></i>',
                '<h4>' + type + '</h4>',
                '</div>',
                '<div class="close">x</div>',
                '<div class="desc">',
                '<p>' + text + '</p>',
                '</div>',
                '</div>'].join(''),
            mes = document.createElement('div');

        mes.innerHTML = html;
        this.el = mes.firstChild;

        var element = this.el;

        if (autoShow) {
            document.body.insertAdjacentElement('beforeend', element);
        } else {
            setTimeout(function () {
                document.body.insertAdjacentElement('beforeend', element)
            }, 3000);
        }

        this.bind();

        var self = this;

        if (autoHide) {
            setTimeout(self.destroy, 3000);
        }
    };

    this.bind = function () {
        var self = this;
        self.el.querySelector('.close')
            .addEventListener('click', function(event) {
                self.destroy.apply(self, arguments);
            });
    };

    this.unbind = function () {
        var self = this;
        self.el.querySelector('.close')
            .removeEventListener('click',this.destroy);
    };

    this.destroy = function () {
        var mes = document.querySelector('.message');
        mes.parentNode.removeChild(mes);
    };
}

    var successButton = document.querySelector('#success'),
        errorButton = document.querySelector('#error'),
        warningButton = document.querySelector('#warning'),
        infoButton = document.querySelector('#info'),
        message = new Message();

successButton.addEventListener('click', function () {
    message.create({
        autoShow: false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        autoHide: false,
        type: 'success',
        position: 'lt'
    });
});

errorButton.addEventListener('click', function () {
    message.create({
        autoShow: true,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        autoHide: true,
        type: 'error',
        position: 'rt'
    });
});

warningButton.addEventListener('click', function () {
    message.create({
        autoShow: false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        autoHide: false,
        type: 'warning',
        position: 'lb'
    });
});

infoButton.addEventListener('click', function () {
    message.create({
        autoShow: true,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        autoHide: true,
        type: 'info',
        position: 'rb'
    });
});
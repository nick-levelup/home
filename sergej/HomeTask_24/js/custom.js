var APP = (function () {

    "use strict";

    var $form, $btn, $input, $content,
        userListClass = 'user-list',
        source = $("#users-template").html();

    function setDom() {
        $form = $('form');
        $btn = $('#searchButton');
        $input = $('#inputeCity');
        $content = $('#content');
    }

    function bind() {
        $form.on('submit', submitEvent);
        $btn.on('click', clickEvent);
    }

    function submitEvent (event) {
        event.preventDefault();
        clickEvent();
    }

    function clickEvent() {
        var value = $input.val();
        
        if (value) {
            getUsers(value)
        }
    }

    function getUsers(userName) {
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'https://api.github.com/search/users?q=' + userName, true);
        xhr.onreadystatechange = checkReq;
        xhr.send();
    }

    function checkReq() {
        var xhr = this;
        
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success.call(xhr)
            } else {
                error.call(xhr)
            }
        }
    }

    function success() {
        showUsers(JSON.parse(this.responseText));
    }

    function showUsers(data) {
        if (data.items.length !== 0) {
            loadTemplate(data);
        } else {
            alert('User(s) not found!');
        }
    }

    function loadTemplate (data) {
        var template = Handlebars.compile(source),
            context = {
                users: data.items
            };

        Handlebars.registerHelper('list', function (items, options) {
            var generate = '<ul class="' + userListClass + '">';

            for (var i = 0, l = items.length; i < l; i++) {
                generate = generate + '<li>' + options.fn(items[i]) + '</li>';
            }
            return generate + '</ul>';
        });

        var html = template(context);
        
        $content.html(html);
    }

    function error() {
        alert('Error!')
    }

    function init() {
        setDom();
        bind();
    }

    return {
        init: init
    }
})().init();
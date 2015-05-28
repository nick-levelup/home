"use strict";

var accordion;

accordion = (function () {

    var container,
        headers,
        config,
        activeItem,
        oldActiveItem,
        firstItem,
        lastItem,
        activeClass = 'is-active',
        focusClass = 'is-focus',
        throttleNavigation = _throttle(navigation, 200);

    function init(options) {
        config = options;

        setDom();
        if (container) {
            bind();
        }
    }

    function _throttle(callback, threshold) {
        var suppress = false,
            clear = function () {
                suppress = false;
            };
        return function () {
            if (!suppress) {
                callback.apply(this, arguments);
                window.setTimeout(clear, threshold);
                suppress = true;
            }
        }
    }

    function setDom() {
        var elementSelector = config.container;

        container = document.querySelector(elementSelector);

        if (container === null) {
            throw (new Error('No elements matches by ' + elementSelector));
        } else {
            headers = container.querySelectorAll(config.header);

            firstItem = headers[0];
            lastItem = headers[headers.length - 1];
     
            setActiveItemOnLoad();
        }
    }

    function setActiveItemOnLoad(argument) {
        var success = true;
        
        try {
            activeItem = container.querySelector('.' + activeClass).previousElementSibling;
        } catch(error) {
            success = false;
        }
        
        if(!success) {
            activeItem = container.querySelector('.item').nextElementSibling;
        } 

        if (activeItem) {
            activeItem.classList.add(focusClass);
            oldActiveItem = activeItem;
        }
    }

    function bind() {
        container.addEventListener('click', showHideContent);
        document.addEventListener('keydown', throttleNavigation);
    }

    function unbind() {
        container.removeEventListener('click', showHideContent);
        document.removeEventListener('keydown', throttleNavigation);
    }

    function showHideContent(event) {
        if (event.target.matches(config.header)) {
            closeActive(oldActiveItem);

            if (event.target !== activeItem) {
                removeFocus(activeItem);
                openElement(event.target);
                oldActiveItem = event.target;
            } else {
                setFocus(activeItem);
                activeItem = oldActiveItem;
            }
        }
    }

    function showHideContentOnFocus() {
        if (activeItem.nextElementSibling.className === 'content') {
            if (oldActiveItem !== activeItem) {
                closeActive(oldActiveItem);
                openElement(activeItem);
                oldActiveItem = activeItem;
            } else {
                openElement(activeItem);
            }
        } else {
            removeActive(activeItem);
            setFocus(activeItem);
        }
    }

    function openElement(element) {
        activeItem = element;
        setActive(activeItem);
        setFocus(activeItem);
    }

    function closeActive(element) {
        if (element) {
            removeActive(element);
            removeFocus(element);
        }
    }

    function setActive(element) {
        if (element) {
            element.nextElementSibling.classList.add(activeClass);
        }
    }

    function removeActive(element) {
        if (element) {
            element.nextElementSibling.classList.remove(activeClass);
        }
    }

    function setFocus(element) {
        if (element) {
           element.classList.add(focusClass);
        }
    }

    function removeFocus(element) {
        if (element) {
            element.classList.remove(focusClass)
        }
    }

    function toggleFocus(element) {
        if (element) {
            element.classList.toggle(focusClass);
            activeItem.classList.toggle(focusClass);
            activeItem = element;
        }
    }

    function getActiveItem() {
        return activeItem;
    }

    function getIndexContent() {
        return [].indexOf.call(headers, activeItem);
    }

    function getContentCount() {
        return container.childElementCount;
    }

    function next() {
        var newIndex = getIndexContent() + 1,
            contentCount = getContentCount();
        if (newIndex < contentCount) {
            closeActive(activeItem);
            openElement(headers[newIndex])
        } else {
            closeActive(activeItem);
            openElement(firstItem)
        }
    }

    function prev() {
        var newIndex = getIndexContent() - 1,
            contentCount = getContentCount();
        if (newIndex < 0) {
            closeActive(activeItem);
            openElement(lastItem)
        } else if (newIndex < contentCount) {
            closeActive(activeItem);
            openElement(headers[newIndex])
        }
    }

    function navigation(event) {
        var index = getIndexContent(),
            prevFocus = headers[index - 1],
            nextFocus = headers[index + 1];

        switch (event.keyCode) {
            case 13:
            case 32:
                showHideContentOnFocus();
                break;

            case 35:
                toggleFocus(lastItem);
                break;

            case 36:
                toggleFocus(firstItem);
                break;

            case 37:
            case 38:
                (prevFocus) ? toggleFocus(prevFocus) : toggleFocus(lastItem);
                break;

            case 39:
            case 40:
                (nextFocus) ? toggleFocus(nextFocus) : toggleFocus(firstItem);
                break;
        }
    }

    function remove() {
        unbind();
    }

    return {
        init: init,
        getActiveItem: getActiveItem,
        getContentCount: getContentCount,
        next: next,
        prev: prev,
        remove: remove
    }
})();

accordion.init({
    container: '.accordion',
    header: 'h3',
    item: '.content'
});
'use strict';

var accordion = (function() {

  var config, container, headers, activeEl, focusEl, nextEl, prevEl, firstEl, lastEl;
  
  function init(options) {
    config = options;
    setDOM();

    if (container) {
      bind();
    }
  }

  function setDOM() {
    var elementSelector = config.container;

    container = document.querySelector(elementSelector);

    if (container === null) {
      throw (new Error('no elements matched by ' + elementSelector));
    } else {
      headers = container.querySelectorAll(config.header);
      firstEl = headers[0];
      lastEl = headers[headers.length - 1];
    }
  }

  function bind() {
    container.addEventListener('click', showHideBody);
    document.addEventListener('keyup', keyNav);
  }

  function unbind() {
    container.removeEventListener('click', showHideBody);
    document.removeEventListener('keyup', keyNav);
  }

  function showHideBody(event) {
    closeActive();

    // только для кнопок навигации: откроем элемент на котором уставлен фокус
    if (event.type === 'keyup') {
      openElement(arguments[1]);
    } else {
      if ( event.target.matches(config.header) & event.target !== activeEl) {
        // удалим с элемента фокус если он был установлен нажатием кнопок навигации
        removeFocus(focusEl);
        openElement(event.target);
      } else {
        activeEl = focusEl = null;
      }
    }
  }

  function keyNav(event) {
    var indexFocusEl;

    // если ни один элемент не сфокусирован, то установим фокус на первый элемент;
    if (!focusEl) {
      focusEl = firstEl;
      setFocus(focusEl);
    } else {
      indexFocusEl = [].indexOf.call(headers, focusEl);
      prevEl = headers[indexFocusEl - 1];
      nextEl = headers[indexFocusEl + 1];

      switch (event.keyCode) {
        // Left, Up arrows
        case 37:
        case 38:
          (prevEl) ? toggleFocus(prevEl) : toggleFocus(lastEl);
          break;

        // Right, Down arrows
        case 39:
        case 40:
          (nextEl) ? toggleFocus(nextEl) : toggleFocus(firstEl);
          break;

        // Home
        case 36:
          toggleFocus(firstEl);
          break;

        // End
        case 35:
          toggleFocus(lastEl);
          break;

        // Enter, Space
        case 32:
        case 13:
          // источник события keyup - документ, поэтому передадим элемент с фокусом
          // в качестве аргумента
          showHideBody(event, focusEl);
          break;
      }
    }
  }

  function setFocus(elem) {
    elem.classList.add('is-focus');
  }

  function removeFocus(elem) {
    if (elem) {
      elem.classList.remove('is-focus')
    }
  }

  // функция устанавливает фокус на целевом элементе и удаляет фокус
  // с текущего элемента
  function toggleFocus(elem) {
    elem.classList.toggle('is-focus');
    focusEl.classList.toggle('is-focus');
    focusEl = elem;
  }

  function closeActive() {
    if (activeEl) {
      removeActive(activeEl);
      removeFocus(activeEl);
    }
  }

  function getActive() {
    return activeEl;
  }

  function removeActive(elem) {
    elem.nextElementSibling.classList.remove('is-active');
  }

  function setActive(elem) {
    elem.nextElementSibling.classList.add('is-active');
  }

  function openElement(header) {
    activeEl = header;
    focusEl = activeEl;

    setFocus(activeEl);
    setActive(activeEl);
  }

  function remove() {
    unbind();
  }

  return {
    init: init,
    closeActive: closeActive,
    getActive: getActive,
    remove: remove
  };
})();
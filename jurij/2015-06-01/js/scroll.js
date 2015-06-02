'use strict';

var scroll = (function() {

  var $up, $down, options, clientHeight, scrollHeight, currentPos,
      scrollSpeed, scrollIntervalMs, pxPerInterval, tempScrollHeight;

  function init(config) {

    // при обновлении страницы установим прокрутку в верхнюю часть
    $(window).scrollTop(0);

    options = config;
    scrollSpeed = options.scrollSpeed;
    scrollIntervalMs = options.scrollIntervalMs;
    clientHeight = options.multiplier * $(window).height();
    $up = $(options.upID);
    $down = $(options.downID);

    bind();

  }

  function bind() {

    window.addEventListener('resize', setClientHeight);
    document.addEventListener('scroll', scrollEvent);
    $up[0].addEventListener('click', scrollToTop);
    $down[0].addEventListener('click', scrollToDown);

  };

  function unbind() {

    window.addEventListener('resize', setClientHeight);
    document.removeEventListener('scroll', scrollEvent);
    $up[0].removeEventListener('click', scrollToTop);
    $down[0].removeEventListener('click', scrollToDown);

  };

  function scrollEvent() {

    // скроем кнопку "вниз" если страница прокручивается не по click на
    // эту кнопку
    if (checkScrollDownBtn()) {
      $down.removeClass('is-active');
    }

    // при каждом вызове функции записываем текущую прокрутку страницы
    scrollHeight = $(window).scrollTop();
    
    // как только высота страницы с учетом прокрутки будет больше, заданной
    // настройками, высоты страницы - отобразим кнопку прокрутки вверх
    $up.toggleClass('is-active', clientHeight < scrollHeight);

  };

  function checkScrollDownBtn() {

    return $down.hasClass('is-active') && tempScrollHeight && scrollHeight === 0;

  };

  function scrollToTop() {
    // перед прокруткой страницы вверх запишем текущее положение прокрутки,
    // чтобы использовать потом для прокрутки вниз по кнопке
    tempScrollHeight = scrollHeight;

    // определим скорость прокрутки, которая будет определяться количеством
    // прокрученных пикселей за заданный промежуток времени
    pxPerInterval = (scrollHeight / clientHeight) * scrollSpeed;

    var timer = setInterval(function() {
      $(window).scrollTop(scrollHeight -= pxPerInterval);
      if (scrollHeight <= 0) {
        clearInterval(timer);
        $down.addClass('is-active');
      }
    }, scrollIntervalMs);
  };

  function scrollToDown() {
    var currentPos = 0;
    $down.removeClass('is-active');

    var timer = setInterval(function() {
      $(window).scrollTop(currentPos += pxPerInterval);
      if (currentPos >= tempScrollHeight) {
        clearInterval(timer);
        $(window).scrollTop(tempScrollHeight);
      }
    }, scrollIntervalMs);
  };

  function setClientHeight() {

    clientHeight = options.multiplier * $(window).height();

  };

  function destroy() {

    unbind();
    $('.scroll-btn').removeClass('is-active');

  };

  return {
    init: init,
    destroy: destroy
  };

})();

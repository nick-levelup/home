var updownElem = document.getElementById('button'),
	pageYLabel = 0;


	

	function eventClick () {
		var pageY = $(window).scrollTop() || document.documentElement.scrollTop,
    		y = $(window).height();
      		
      switch (updownElem.className) {
        case 'up':
           	pageYLabel = pageY;
	        var timer = setInterval(function() {
	          	
	          	$(window).scrollTop(pageY -= 100)
	          		if(pageY <= 0) {
	          			clearInterval(timer)
	          		};
		     }, (y/pageYLabel)*100);

        	updownElem.className = 'down';
        	break;

        case 'down':

        	var timer2 = setInterval(function () {

        		$(window).scrollTop(pageY += 100)
	          		if(pageY >= pageYLabel) {
	          			clearInterval(timer2)
	          		};

        	}, (y/pageYLabel)*100);
        	updownElem.className = 'up';        	
      };
      
    };


    function eventScroll () {
      var pageY1 = $(window).scrollTop() || document.documentElement.scrollTop;
      var innerHeight = document.documentElement.clientHeight;

      switch (updownElem.className) {
        case '':
          if (pageY1 > innerHeight) {
            updownElem.className = 'up';//top
          }
          break;

        case 'up':
          if (pageY1 <= innerHeight) {
            updownElem.className = 'down';
          }
          break;

        case 'down':
          if (pageY1 > innerHeight) {
            updownElem.className = 'up';//top
          }
          break;

      }
    }

    updownElem.addEventListener("click", eventClick);
	window.addEventListener("scroll", eventScroll);



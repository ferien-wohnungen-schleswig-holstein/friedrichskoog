var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.animateHidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= -350) {
          elems[i].className = elems[i].className.replace(
            'animateHidden',
            'animate'
          );
        }
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init();
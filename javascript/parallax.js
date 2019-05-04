$(window).scroll(function () { 

    $('.twit-bird').css({
      'top' : -($(this).scrollTop()/6)+"px"
    }); 

});
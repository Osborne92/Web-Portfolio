$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var scrollBar = 0;
  $(window).scroll(function(){ //sets browser window to deploy function on scroll event
    var scrollTop = $(this).scrollTop(); //sets scrollTop variable equal jquery's scrollTop
    if (scrollTop - scrollBar > 50){ //if scrollTop - lastScrollTop > 50,
      var navHeight = $('.navbar').css('height'); //navHeight activates, targeting the navbar class' height property
      $('.navbar').animate({top: '-' + navHeight}, 100); //jquery's animate subtracks variable navHeight at a rate of 150ms
      scrollBar = scrollTop; //Sets x to the value of y so that you always have a record of how far the user scrolled last time they finished scrolling
    } else if (scrollBar - scrollTop > 50) { //if lastScrollTop > scrollTop by 50 or more (top 50 of the page)
      $('.navbar').animate({top: '0px'}, 100); //jquery's animate returns navbar class at a rate of 150ms
      scrollBar = scrollTop; //Sets x to the value of y so that you always have a record of how far the user scrolled last time they finished scrolling
    }
  });
});

/*
var lastScrollTop = 0;
$(window).scroll(function(){ //sets browser window to deploy function on scroll event
  var scrollTop = $(this).scrollTop(); //sets scrollTop variable equal jquery's scrollTop
  if (scrollTop - lastScrollTop > 50){ //if scrollTop - lastScrollTop > 50,
    var navHeight = $('.navbar').css('height'); //navHeight activates, targeting the navbar class' height property
    $('.navbar').animate({top: '-' + navHeight}, 100); //jquery's animate subtracks variable navHeight at a rate of 150ms
    lastScrollTop = scrollTop; //Sets x to the value of y so that you always have a record of how far the user scrolled last time they finished scrolling
  } else if (lastScrollTop - scrollTop > 50) { //if lastScrollTop > scrollTop by 50 or more (top 50 of the page)
    $('.navbar').animate({top: '0px'}, 100); //jquery's animate returns navbar class at a rate of 150ms
    lastScrollTop = scrollTop; //Sets x to the value of y so that you always have a record of how far the user scrolled last time they finished scrolling
  }
});
});
*/

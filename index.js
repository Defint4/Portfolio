$(function() {
  var header = $(".navbar");
  var links = $(".nav-link");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          header.addClass("scrollednav");
          links.addClass("scrolledlinks");
      } else {
          header.removeClass("scrollednav");
          links.removeClass("scrolledlinks");
          
      }
  });

});

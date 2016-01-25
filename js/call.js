$(document).ready(function(){
  $("#sign").click(function() {
    $('html, body').animate({
        scrollTop: $("#signin").offset().top
    }, 1500);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 1500);
      return false;
  });
});

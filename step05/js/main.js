$(function () {
  $('.main_slider').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,
  });

  $('.mbtn').on('click', function () {
    $('.gnb').toggleClass('on');
  });

  $('.gnb>ul>li>a').on('click', function (event) {
    if ($('.gnb').hasClass('on')) {
      event.preventDefault();
      $('.smenu').stop().slideUp();
      $(this).next().slideToggle();
    }
  });

  $(window).on('resize', function () {
    $('.gnb').removeClass('on');
    $('.smenu').removeAttr('style');
  })
})
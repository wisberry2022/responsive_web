$(function () {
  $('.gnb>ul>li>a').on('click', function (event) {
    if ($(window).width() < 769) {
      event.preventDefault();
      $('.smenu').hide();
      $(this).next().show();
    }
  });

  // jquery로 인해 .smenu에 적용되었던 인라인 스타일을 제거해주어 사이즈가 변경되었을 때 스크립트가 작동되지 않게 한다
  $(window).on('resize', function () {
    $('.smenu').removeAttr('style');
  });

  $('.mbtn').on('click', function () {
    $('.header .gnb').toggleClass('on')
  })
})
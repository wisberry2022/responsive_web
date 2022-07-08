$(function () {
  $('.mbtn').on('click', function () {
    $('.gnb').toggleClass('on');
  })

  $('.gnb>ul>li>a').on('click', function (event) {
    if ($('.gnb').hasClass('on')) {
      event.preventDefault();
      $('.sub_menu').slideUp();
      $(this).next().stop().slideToggle();
    }
  })

  $(window).on('resize', function () {
    $('.gnb').removeClass('on');
    $('.sub_menu').removeAttr('style');
  });

  $('.mclone').on('click', function () {
    var siteMap = $('.gnb>ul').clone().addClass('container');
    console.log(siteMap);
    siteMap.appendTo($('body')).wrap('<div class ="sitemap"></div>');
    $('<i class = "xi-close up"></i>').appendTo(siteMap.parent());

    $('.mclone').on('click', function () {
      siteMap.show();
    })
  });

  $('.xi-close').on('click', function () {
    console.log('click');
    siteMap.hide();
  })
})
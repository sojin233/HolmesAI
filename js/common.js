$(document).ready(function () {
  // nav function
  $(".btn-menu").click(function () {
    if ($(".btn-menu > .ico-nav").hasClass("open")) {
      $(".btn-menu > .ico-nav").removeClass("open");
      $(".nav-mobile").fadeOut();
      $("html").attr("style", "overflow: auto !important");
      $(".logo-box a img").attr("src", "../img/common/logo_01_w.png");
    } else {
      $(".btn-menu > .ico-nav").addClass("open");
      $(".nav-mobile").fadeIn();
      $(".nav-mobile .content-box > ul > li").removeClass("open");
      $("html").attr("style", "overflow: hidden !important");
      $(".logo-box a img").attr("src", "../img/common/logo_01.png");
    }
  });
  $(".nav-mobile .content-box > ul > li").click(function () {
    $(this).toggleClass("open");
    $(this).siblings().removeClass("open");
  });

  // 스크롤 이벤트 처리
  const $counters = $(".scroll_on");
  const exposurePercentage = 40; // 노출 비율
  const loop = true; // 반복 여부

  $(window)
    .on("scroll", function () {
      $counters.each(function () {
        const $el = $(this);
        const rect = $el[0].getBoundingClientRect();
        const winHeight = window.innerHeight;
        const contentHeight = rect.bottom - rect.top;

        if (
          rect.top <= winHeight - (contentHeight * exposurePercentage) / 100 &&
          rect.bottom >= (contentHeight * exposurePercentage) / 100
        ) {
          $el.addClass("active");
        } else if (
          loop &&
          (rect.bottom <= 0 || rect.top >= window.innerHeight)
        ) {
          $el.removeClass("active");
        }
      });
    })
    .scroll();

  // 클릭 이벤트 처리
  $(".list_box li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var index = $(this).index() + 1;
    $(".list_content_box > div").removeClass("show");
    $(".list_content_box .list0" + index).addClass("show");
  });
});

$(document).ready(function () {
  // list box show hide
  $(".list_box li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
  $(".list_box li:first-child").click(function () {
    $(".list_content_box .list01").addClass("show");
    $(".list_content_box .list02").removeClass("show");
    $(".list_content_box .list03").removeClass("show");
    $(".list_content_box .list04").removeClass("show");
  });
  $(".list_box li:nth-child(2)").click(function () {
    $(".list_content_box .list02").addClass("show");
    $(".list_content_box .list01").removeClass("show");
    $(".list_content_box .list03").removeClass("show");
    $(".list_content_box .list04").removeClass("show");
  });
  $(".list_box li:nth-child(3)").click(function () {
    $(".list_content_box .list03").addClass("show");
    $(".list_content_box .list01").removeClass("show");
    $(".list_content_box .list02").removeClass("show");
    $(".list_content_box .list04").removeClass("show");
  });
  $(".list_box li:nth-child(4)").click(function () {
    $(".list_content_box .list04").addClass("show");
    $(".list_content_box .list01").removeClass("show");
    $(".list_content_box .list02").removeClass("show");
    $(".list_content_box .list03").removeClass("show");
  });

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
});

$(document).ready(function () {
  const $counters = $(".scroll_on");

  const exposurePercentage = 30; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
  const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

  $(window)
    .on("scroll", function () {
      $counters.each(function () {
        const $el = $(this);

        // 요소의 위치 정보를 가져옵니다.
        const rect = $el[0].getBoundingClientRect();
        const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
        const contentHeight = rect.bottom - rect.top; // 요소의 높이

        // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
        if (
          rect.top <= winHeight - (contentHeight * exposurePercentage) / 100 &&
          rect.bottom >= (contentHeight * exposurePercentage) / 100
        ) {
          $el.addClass("active");
        }
        // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
        // if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
        //   $el.removeClass("active");
        // }
      });
    })
    .scroll();
});

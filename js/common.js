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

  // 클릭 이벤트 처리
  $(".list_box li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var index = $(this).index() + 1;
    $(".list_content_box > div").removeClass("show");
    $(".list_content_box .list0" + index).addClass("show");
  });
});

$(document).ready(function () {
  // Debounce 함수: 이벤트가 연속적으로 호출될 때, 마지막 호출만 처리하도록 함
  function debounce(func, wait) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }

  // 요소의 가시성을 체크하고, 필요에 따라 'visible' 클래스를 추가하거나 제거하는 함수
  function checkVisibility() {
    $(".hidden-element").each(function () {
      const $element = $(this);
      const elementTop = $element.offset().top;
      const elementBottom = elementTop + $element.outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      // 요소가 뷰포트에 보이는 경우
      if (elementTop < viewportBottom && elementBottom > viewportTop) {
        if ($(window).width() > 600) {
          // 웹에서만 'visible' 클래스를 추가
          $element.addClass("visible");
        }
      } else {
        if ($(window).width() > 600) {
          // 웹에서만 'visible' 클래스를 제거
          $element.removeClass("visible");
        }
      }
    });
  }

  // 디바운스 처리된 'checkVisibility' 함수 정의
  const debouncedCheckVisibility = debounce(checkVisibility, 100);

  // 스크롤과 리사이즈 이벤트에 'checkVisibility' 함수를 연결
  $(window).on("scroll resize", debouncedCheckVisibility);

  // 초기 가시성 체크
  checkVisibility();
});

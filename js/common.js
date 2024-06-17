$(document).ready(function () {
  // scroll header active
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  // moblie nav popup
  $(".btn-menu").click(function () {
    if ($(".btn-menu > .ico-nav").hasClass("open")) {
      $(".btn-menu > .ico-nav").removeClass("open");
      $(".nav-mobile").fadeOut();
      $("html").attr("style", "overflow: auto !important");
    } else {
      $(".btn-menu > .ico-nav").addClass("open");
      $(".nav-mobile").fadeIn();
      $(".nav-mobile .content-box > ul > li").removeClass("open");
      $("html").attr("style", "overflow: hidden !important");
    }
  });
  $(".nav-mobile .content-box > ul > li").click(function () {
    $(this).toggleClass("open");
    $(this).siblings().removeClass("open");
  });

  // select box
  $(".select-tit").on("click", function () {
    $(".select-list").toggleClass("active");
  });
  $(".select-list > li").on("click", function () {
    let pickList = $(this).text();
    $(".select-tit").text(pickList);
    $(this).parent().removeClass("active");
  });
  $(document).on("click", function (event) {
    if (
      !$(event.target).is($(".select-tit")) &&
      $(".select-list").hasClass("active")
    ) {
      $(".select-list").removeClass("active");
    }
  });

  // input file event
  $("#file").on("change", function () {
    var fileName = $("#file").val();
    $(".upload-input").val(fileName);
  });

  // inquiry popup
  $(".btninquiry").click(function () {
    $(".inquiry-popup").addClass("open");
    $("html").attr("style", "overflow: hidden !important");
  });
  $(".inquiry-popup .inquiry-wrap .header .ico-nav").click(function () {
    $(".inquiry-popup").removeClass("open");
    $("html").attr("style", "overflow: auto !important");
  });

  // scroll  하면 나타나는
  $(window).scroll(function () {
    $(".txt-type-02 h3").each(function () {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("ani-width");
      }
    });
  });
  $(document).ready(function () {
    const $counters = $(".fadeUp");
    const exposurePercentage = 100;
    const loop = true;

    $(window)
      .on("scroll", function () {
        // 각 "fadeUp" 클래스를 가진 요소에 대해 반복합니다.
        $counters.each(function () {
          const $el = $(this);
          const rect = $el[0].getBoundingClientRect();
          const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
          const contentHeight = rect.bottom - rect.top; // 요소의 높이

          if (
            rect.top <=
              winHeight - (contentHeight * exposurePercentage) / 200 &&
            rect.bottom >= (contentHeight * exposurePercentage) / 200
          ) {
            $el.addClass("active");
          }
          // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
          if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
            $el.removeClass("active");
          }
        });
      })
      .scroll();
  });
});

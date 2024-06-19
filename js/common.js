$(document).ready(function () {
  // list box show hide
  $(".list_box li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
  $(".list_box li:first-child").click(function () {
    $(".list_content_box .list01").addClass("show");
    $(".list_content_box .list02").removeClass("show");
  });
  $(".list_box li:nth-child(2)").click(function () {
    $(".list_content_box .list02").addClass("show");
    $(".list_content_box .list01").removeClass("show");
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

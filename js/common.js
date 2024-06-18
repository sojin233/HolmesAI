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
});

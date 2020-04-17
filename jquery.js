$(function () {
  // jQuery methods go here...
  $(".fa-bars").click(function () {
    var menuBar = $("header nav ul");
    if (menuBar.hasClass("menu-active")) {
      $(".subpage-h3").animate(
        {
          "margin-top": "8rem",
        },
        700
      );
      menuBar.slideUp(700).removeClass("menu-active");
    } else {
      menuBar.slideDown(700).addClass("menu-active");
      $(".subpage-h3").animate(
        {
          "margin-top": "0rem",
        },
        700
      );
    }
  });

  $(".menu-btn").click(function () {
    var id = $(this).attr("href");
    var position = $(id).offset().top;

    $("html, body").animate(
      {
        scrollTop: position,
      },
      500
    );
  });
});

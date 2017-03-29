$(document).ready(function() {
  console.log("Page ready");
  absoluteHeader();

  var SCREEN_WIDTH = $(window).width();
  var SCREEN_HEIGHT = $(window).height();
  var headerHeight = $('#header').height();

  $(document).scroll(function() {
    var scrollDist = $(this).scrollTop();

    if (scrollDist >= SCREEN_HEIGHT - headerHeight) {
      fixedHeader();
    } else {
      absoluteHeader();
    }
  })
})

var absoluteHeader = function() {
  $('#header').css("position", "absolute");
  $('#header').css("bottom", "0");
  $('#header').css("top", "");
}

var fixedHeader = function() {
  $('#header').css("position", "fixed");
  $('#header').css("top", "0");
  $('#header').css("bottom", "");
}

var scrollTo = function(sectionID) {
  $('html, body').animate({
    scrollTop: $(sectionID).offset().top - $('#header').height()
  }, 500);
}

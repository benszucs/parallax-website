$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop();
  console.log(wScroll);

  $('.parallax-bg').css('background-position', 'center '+(-wScroll*0.35)+'px')

  $('.parallax-bg2').css('background-position', 'center '+(400-wScroll*0.35)+'px')

  $('.parallax-bg3').css('background-position', 'center '+(700-wScroll*0.35)+'px')

  $('.parallax-bg4').css('background-position', 'center '+(990-wScroll*0.35)+'px')
}

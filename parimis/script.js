$('a.togglemenu').on('click', function () {
  $('#overlay').toggleClass('active');
});

$(window).on('scroll', function (e) {
  console.log("j'ai scrollé", e)
})

$(document).on('keydown', function (event) {
  console.log('touche enfoncée:', event.which)
})

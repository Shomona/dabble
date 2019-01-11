/*var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});
*/
var fixOwl = function() {
  var $stage = $('.owl-stage'),
    stageW = $stage.width(),
    $el = $('.owl-item'),
    elW = 0;
  $el.each(function() {
    elW += $(this).width() + +($(this).css("margin-right").slice(0, -2))
  });
  if (elW > stageW) {
    $stage.width(elW);
  };
}


var owl = $('.owl-carousel.project');
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoWidth: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  //onInitialized: fixOwl,
  //onRefreshed: fixOwl
});
$('.play').on('click', function() {
  owl.trigger('play.owl.autoplay', [3000])
})
$('.stop').on('click', function() {
  owl.trigger('stop.owl.autoplay')
})

var owl = $('.owl-carousel.dabble');
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoWidth: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true
});
$('.play').on('click', function() {
  owl.trigger('play.owl.autoplay', [3000])
})
$('.stop').on('click', function() {
  owl.trigger('stop.owl.autoplay')
})

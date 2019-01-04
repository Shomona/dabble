var app = new Framework7({
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

var owl = $('.owl-carousel.project');
owl.owlCarousel({
  items:4,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true
});
$('.play').on('click',function(){
  owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
  owl.trigger('stop.owl.autoplay')
})

var owl = $('.owl-carousel.dabble');
owl.owlCarousel({
  items:4,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true
});
$('.play').on('click',function(){
  owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
  owl.trigger('stop.owl.autoplay')
})

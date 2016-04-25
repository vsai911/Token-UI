 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */

( function( $ ) {
  
  // Setup variables
  $window = $(window);
  $slide = $('.homeSlide');
  $body = $('body');

  // Init Skrollr
  var s = skrollr.init({
      forceHeight: false
  });
  
    //FadeIn all sections   
  $body.imagesLoaded( function() {
    setTimeout(function() {
          
          // Resize sections
          adjustWindow();
          
          // Fade in sections
        $body.removeClass('loading').addClass('loaded');
        
    }, 800);
  });
  
  function adjustWindow(){
        
    // Get window size
      winH = $window.height();
      
      // Keep minimum height 550
    if(winH <= 550) {
      winH = 550;
    } 
      
      // Resize our slides
      $slide.height(winH);

      $('#slide-4').height(winH/3);
      
      // Refresh Skrollr after resizing our sections
      s.refresh($('.homeSlide'));
      
  }

  $(window).resize(function() {

    winH = $window.height();
    winW = $window.width();

    if (winH <= 550) {
      winH = 550;
    }

    if (winW <= 500) {
      win = 550
    }

    $slide.height(winH);
    $slide.width(winW);

    $('#slide-4').height(winH/3);

    s.refresh($('.homeSlide'));
  })

  // This is here to attempt to keep the navbar at the top.
  var initialPos = $('#index-header').offset().top;

  $(window).scroll(function() {
      var scrolled = $(window).scrollTop();
    if ( scrolled > initialPos ) {
        $('#index-header').css({
           position:"fixed",
           top:'0px',
           width: "100%"
        });
    } else {

        $('#index-header').css({
            position:"absolute",
            top:initialPos+"px",
            width: "100%"
        });
    }
  });
} )( jQuery );
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
    var winH = $window.height(),
      winW = $window.width();
      
      // Keep minimum height 550
    if(winH <= 550) {
      winH = 550;
    } 
      
      // Resize our slides
      $slide.height(winH);

    if (winW <= 941) {
      $('#slide-4').height(winH/2.45);
    } else {
      $('#slide-4').height(winH/3);
    }
    // This resizes the button container so that it stacks in a box or a straight line.
    // When you resize.
    if (winW <= 466) {
      $('#buttons-container').css('width', '33%');
    } else {
      $('#buttons-container').css('width', '23.23176%');
    }

    // This resizes the end list order to reduce margin at bigger sizes, and increases
    // when the screen is small
    if (winW <= 638) {
      $('.footer-lists').css('margin-right', '20%')
    } else {
      $('.footer-lists').css('margin-right', '2.35765%')
    }

      // Refresh Skrollr after resizing our sections
      s.refresh($('.homeSlide'));
      
  }

  $(window).resize(function() {

    var winH = $window.height(),
      winW = $window.width();

    if (winH <= 550) {
      winH = 550;
    }

    if (winW <= 500) {
      win = 550
    }

    $slide.height(winH);
    $slide.width(winW);

    if (winW <= 941) {
      $('#slide-4').height(winH/2.45);
    } else {
      $('#slide-4').height(winH/3);
    }
    // This resizes the button container so that it stacks in a box or a straight line
    // when you resize.
    if (winW <= 466) {
      $('#buttons-container').css('width', '28%');
    } else {
      $('#buttons-container').css('width', '23.23176%');
    }

    // This resizes the end list order to reduce margin at bigger sizes, and increases
    // when the screen is small
    if (winW <= 638) {
      $('.footer-lists').css('margin-right', '20%')
    } else {
      $('.footer-lists').css('margin-right', '2.35765%')
    }

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
            position:"fixed",
            top:initialPos+"px",
            width: "100%"
        });
    }
  });
} )( jQuery );
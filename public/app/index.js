/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */

// Parallax doesn't seem to do anything -- please test. Commented out for now.

(function($) {

  $.fn.parallax = function(options) {

    var windowHeight = $(window).height();

    // Establish default settings
    var settings = $.extend({
        speed        : 0.15
    }, options);

    // Iterate over each object in collection
    return this.each( function() {

    	// Save a reference to the element
    	var $this = $(this);

    	// Set up Scroll Handler
    	$(document).scroll(function(){

		    var scrollTop = $(window).scrollTop();
        var offset = $this.offset().top;
        var height = $this.outerHeight();

      	// Check if above or below viewport
    		if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
    			return;
    		}

  		  var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
        // Apply the Y Background Position to Set the Parallax Effect
  			$this.css('background-position', 'center ' + yBgPosition + 'px');
      });
    });
  }

}(jQuery));

$('.parallax').parallax({
	speed :	0.15
});


$(document).ready(function(){
  var contactClicked = false;
  $('.location-contact').click(function(){
    // Set the effect type
    var effect = 'slide';
    // Set the options for the effect type chosen
    var options = { direction: 'right' };
    // Set the duration (default: 400 milliseconds)
    var duration = 500;
    if (contactClicked) {
      $(this).siblings().show();
      contactClicked = false;
      $(this).removeClass('location-contact-clicked');
    } else {
      $(this).siblings().hide();
      contactClicked = true;
      $(this).addClass('location-contact-clicked');
    }

    $('#contact-form').toggle(effect, options, duration);
  });
})

$('.navbar-toggle').click(function(){
  console.log(this);
})
$(function(){
  $('.roll-down').hide();
  $('#pt').on({
    mouseenter: function () {
      $('#view-pt').slideDown('fast','linear');
    },
    mouseleave: function () {
      $('#view-pt').slideUp('fast','linear');
    }
  });
  $('#leap').on({
    mouseenter: function () {
      $('#view-leap').slideDown('fast','linear');
    },
    mouseleave: function () {
      $('#view-leap').slideUp('fast','linear');
    }
  });
  $('#gigg').on({
    mouseenter: function () {
      $('#view-gigg').slideDown('fast','linear');
    },
    mouseleave: function () {
      $('#view-gigg').slideUp('fast','linear');
    }
  });
  $('#konkurito').on({
    mouseenter: function () {
      $('#view-konkurito').slideDown('fast','linear');
    },
    mouseleave: function () {
      $('#view-konkurito').slideUp('fast','linear');
    }
  });
  $('#peerwise').on({
    mouseenter: function () {
      $('#view-peerwise').slideDown('fast','linear');
    },
    mouseleave: function () {
      $('#view-peerwise').slideUp('fast','linear');
    }
  });
});
$(document).ready(function() {

  var $categoryButtons = $('.portfolio-button-group > .button')
  $categoryButtons.on('click', function(evt) {
    evt.preventDefault();
    $categoryButtons.removeClass('active-category');
    $(this).addClass('active-category');
  });
  var navbarOpen = false;
  // This gets the correct CSS when the navbar button is clicked
  $('.navbar-toggle').click(function(){
    if(navbarOpen) {
      navbarOpen = false;
      $(this).removeClass('navbar-toggle-open');
    } else {
      navbarOpen = true;
      $(this).addClass('navbar-toggle-open');
    }
  })
});

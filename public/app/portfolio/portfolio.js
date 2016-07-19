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
  var $projects = $('.project');
  $categoryButtons.on('click', function(evt) {
    evt.preventDefault();
    var $el = $(this);
    $categoryButtons.removeClass('active-category');
    $el.addClass('active-category');
    var category = $el.data('category');
    $projects.removeClass('hidden');
    $projects.not('[data-category*="' + category + '"]').addClass('hidden');
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

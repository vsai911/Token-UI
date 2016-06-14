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

$('#index-button').click(function() {
  $(this).closest('button').attr('aria-expanded', function(i, attr) {
    if (attr == 'true') {
      $(this).removeClass('collapsed');
      $('#index-navbar').removeClass('in');
      return attr = 'false';
    } else {
      $(this).addClass('collapsed');
      $('#index-navbar').addClass('in');
      return attr = 'true';
    }
  });
})
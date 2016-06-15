var TEAM_POLYGON_RADIUS = 300;
// TODO: change this later
var POLYGON_MIN_WIDTH = 700;
// Classes
var TEAM_MEMBER = '.team-member';
var TEAM_CONTAINER_OFFSET = 140;

function drawPolygon() {
	//Draw the polygon
	var radius = TEAM_POLYGON_RADIUS;
	var container = $('#team-container');
	var $fields = $(TEAM_MEMBER);
	container.height(radius * 2 + ($fields.height() / 2) + TEAM_CONTAINER_OFFSET);
	var width = container.width(),
	 height = container.height();
	var angle = 0, step = (2*Math.PI) / $fields.length;

	$fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    $(this).css({
      left: x + 'px',
      top: y + 'px'
    });
    angle += step;
	});
}

function drawLine() {
	var $fields = $(TEAM_MEMBER),
		container = $('#team-container'),
		containerWidth = container.width() / 2,
		margin = 20;

	function getY(index) {
		if (index === 0) {
			return margin * 5;
		}
		var $previous = $($fields[index - 1]);	
		return $previous.position().top + $previous.height() + margin;
	}

	$fields.each(function(index) {
    var x = containerWidth - ($(this).width() / 2);
    var y =  getY(index);
    $(this).css({
      left: x + 'px',
      top: y + 'px'
    });
	});
}

function getViewportWidth() {
	return (window.innerWidth > 0) ? window.innerWidth : screen.width;
}

function refreshTeamView() {
	// Determine window inner width to draw polygon
	var drawFn = getViewportWidth() >= POLYGON_MIN_WIDTH ? drawPolygon : drawLine;
	setTimeout(drawFn, 0);
}

// I temporarily disabled particles to lower the battery life drain.
$(document).ready(function() {
	// particlesJS.load('particles-js', 'app/team/particles.json');
	refreshTeamView();
});


$(window).on('resize', refreshTeamView);

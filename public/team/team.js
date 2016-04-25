var TEAM_POLYGON_RADIUS = 250;

function drawPolygon() {
	//Draw the polygon
	var radius = TEAM_POLYGON_RADIUS;
	var fields = $('.team-member'), 
		container = $('#team-container'), 
		width = container.width(), 
		height = container.height();
	var angle = 0, step = (2*Math.PI) / fields.length;
	fields.each(function() {
	    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
	    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
	    $(this).css({
	        left: x + 'px',
	        top: y + 'px'
	    });
	    angle += step;
	});
}

$(document).ready(function() {
	particlesJS.load('particles-js', 'particles.json', function() {
  		console.log('callback - particles.js config loaded');
	});
	drawPolygon();
});

$(window).on('resize', drawPolygon);
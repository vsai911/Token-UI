// <<<<<<< HEAD
// $(function(){
//   particlesJS.load('particles-js', 'particles.json', function() {
//   console.log('callback - particles.js config loaded');
//   });

//   $('#Sai').on('click',function (evt){
    
//   });
// });
// =======
var TEAM_POLYGON_RADIUS = 250;
var TOGGLE_DURATION = 500;

// // Classes
var TEAM_MEMBER = '.team-member';

function drawPolygon() {
	//Draw the polygon
	var radius = TEAM_POLYGON_RADIUS;
	var fields = $(TEAM_MEMBER), 
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
	// $(TEAM_MEMBER).click(function() {
	// 	$('#member-information').toggle(TOGGLE_DURATION);
	// 	$(this).toggleClass('team-member-flip');
	// });
	drawPolygon();
});

$(window).on('resize', drawPolygon);
// >>>>>>> a69e0714c3c2a0b81f5d58f42d073e79bdcb0d9e

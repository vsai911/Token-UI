$(document).ready(function(){
  $("#contact_form").submit(function(event){
  	/* stop form from submitting normally */
    	event.preventDefault();
    	$.ajax({
    	 	type : 'POST',
    	 	url : '/contact-submit',
    	 	data: JSON.stringify({ name : $('#InputName').val(), email: $('#InputEmailSecond').val(), message: $('#InputMessage').val() }),
        contentType: 'application/json',
    	 	success : function(){
    	 		$('#InputName').val("");
    	 		$('#InputEmailFirst').val("");
          $('#InputEmailSecond').val("");
    	 		$('#InputMessage').val("");
          $('.alert-success').removeClass("hide");
          setTimeout(function(){
            $('.alert-success').fadeOut(1000, "linear");
          }, 4000);
    	 	},
        error: function(error) {
          console.log('submitting error', error)
          $('.alert-danger').removeClass("hide");
          setTimeout(function(){
            $('.alert-danger').fadeOut(1000, "linear");
          }, 4000);
        }
    	});
  });

  $('#alert-success-close').on('click',function(event){
      $('.alert-success').addClass("hide");
  });

  $('#alert-danger-close').on('click',function(event){
      $('.alert-danger').addClass("hide");
  });

  // This gets the correct CSS when the navbar button is clicked
  $('.navbar-toggle').click(function(){
    var navbarOpen = false;
    console.log(this);
    if(navbarOpen) {
      navbarOpen = false;
      $(this).removeClass('navbar-toggle-open');
    } else {
      navbarOpen = true;
      $(this).addClass('navbar-toggle-open');
    }
  });
});

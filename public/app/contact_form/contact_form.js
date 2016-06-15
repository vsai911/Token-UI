$(document).ready(function(){
  $("contact_form").submit(function(event){
  	/* stop form from submitting normally */
    	event.preventDefault();
    	$.ajax({
    	 	type : 'POST',
    	 	url : '/contact-submit',
    	 	data: JSON.stringify({ name : $('#InputName').val(), email: $('#InputEmailSecond').val(), message: $('#InputMessage').val() }),
        contentType: 'application/json',
    	 	success : function(){
    	 		$('#InputName').val("");
    	 		$('#InputEmail').val("");
          // '#InputEmailSecond').val("");
    	 		$('#InputMessage').val("");
    	 	}
    	});
  });
});

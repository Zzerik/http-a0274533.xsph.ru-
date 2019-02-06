$(document).ready(function() { 
	$('.back-call-mail').click( function(event){ 
		event.preventDefault(); 
		$('.overlay').fadeIn(400, 
		 	function(){ 
				$('.modal_form_mail') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
$(".back-call-mail, .send, .modal_close").click(function() {
    $("body").toggleClass("locked");
});
	$('.modal_close, .overlay, .send').click( function(){ 
		$('.modal_form_mail')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400); 
				}
			);
	});
});
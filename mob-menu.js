$(document).ready(function() { 
	$('.mob-menu__button').click( function(event){ 
		event.preventDefault(); 
		$('.overlay').fadeIn(100, 
		 	function(){ 
				$('.mob-menu') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '0%'}, 400); 
		});
	});
$(".mob-menu__button, .mob-menu, .overlay").click(function() {
    $("body").toggleClass("locked");
});
	$('.modal_close_menu, .overlay, .menu, .mob-menu').click( function(){ 
		$('.mob-menu')
			.animate({opacity: 0, top: '100%'}, 200,  
				function(){ 
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400); 
				}
			);
	});

});
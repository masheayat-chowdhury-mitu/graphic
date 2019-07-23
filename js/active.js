(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        $(".header-slider-area").owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			navText:['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'],
			dots:true,
			items:1,
			autoplay:true,
			autoplayTimeout:4000,
			animateIn:'fadeIn'
		});
		 /* ityped js */
	ityped.init("#ityped",{ 
		strings : ['Show off those skills,work & ' ,],
		loop:true,
		typeSpeed:55,
		backSpeed:20,
		});
		/* ityped js */
	ityped.init("#ityped1",{ 
		strings : ['awesome projects.  ' ,],
		loop:true,
		typeSpeed:55,
		backSpeed:20,
		});
		/* ityped js */
	ityped.init("#ityped2",{ 
		strings : ['Make your unique work and   ' ,],
		loop:true,
		typeSpeed:55,
		backSpeed:20,
		});
		/* ityped js */
	ityped.init("#ityped3",{ 
		strings : ['services pop  ' ,],
		loop:true,
		typeSpeed:55,
		backSpeed:20,
		});
		/* team slider */
        $(".testimonial-slider-area").owlCarousel({
			loop:true,
			margin:10,
			/* nav:false, */
			/* navText:['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'], */
			dots:true,
			items:1,
			autoplay:true,
			autoplayTimeout:4000,
			animateIn:'fadeIn'
		});
		/* logo-slider-area */
		$(".logo-slider-area").owlCarousel({
			loop:true,
			margin:10,
			items:5,
			nav:false,
			autoplay:true,
			autoplayTimeout:3000,
			animateIn:'fadeIn'
		});
		//wow js
			var wow = new WOW(
					{
				boxClass:     'wow',      
				animateClass: 'animated',
				offset:       0,         
				mobile:       true,   
				live:         true,    
				callback:     function(box) {
				},
				scrollContainer: null 
			  }
			);
			wow.init();			
    });

    jQuery(window).load(function(){
			/* TOP Menu Stick  */
			$(window).on('scroll',function() {
			if ($(this).scrollTop() > 1){  
				$('.header-top-area').addClass("sticky");
			  }
			  else{
				$('.header-top-area').removeClass("sticky");
			  }
			}); 
		});
}(jQuery));	
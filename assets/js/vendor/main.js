(function ($){
	"use strict";
	
	
	$('.active').owlCarousel({
    loop:true,
    nav:true,
	margin:20,
   responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
         800:{
            items:5
        },
        1000:{
            items:8
        }
    }


})



})(jQuery);
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		speed: 300,
		centerMode: true,
		slidesToShow: 2,
		centerPadding: '6px',

	});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    var textColorScroll = $(".navbar-nav li a").css("color", "white");
	    if (scroll >= 76) {
	    	$(".navbar").addClass("navDark");
	        $(".navbar-nav li a").addClass("textColorScroll");
	    }
	    if (scroll <= 76) {
	        $(".navbar").removeClass("navDark");
	    }
	});
	  
});




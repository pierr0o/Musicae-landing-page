//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
   
  $(window).scroll(function() {
    var heightTop = $(window).scrollTop();
    if (heightTop  > 100) {
    	$('#nav-fix').addClass("navbar-fixed-top");
    }
    else {
    	$('#nav-fix').removeClass("navbar-fixed-top");
    }
  });

  $('.single-item').slick();




  
});



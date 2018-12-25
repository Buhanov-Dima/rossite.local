$(document).ready(function(){
  
  	$(".slider").owlCarousel({
	  	items:1,
	    loop:true,
	    nav:true,
	    dots:false,
	    center:true,
	    margin:10,
	    URLhashListener:true,
	    autoplayHoverPause:true,
	    startPosition: 'URLHash'
	  });


  	$('.btn').on('click', function() {
  		setTimeout(function() {
       		$('.hide_btn').addClass("hidden");
  			$('.open_block').removeClass("hidden");
   			}, 5000);
  	});
});
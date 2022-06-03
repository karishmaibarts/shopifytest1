$(document).ready(function(){

  var total_hight = $('#MainContent').offset().top

  $(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
 
    if(scroll > total_hight){
     $(".sticky_cart").removeClass("sticky_cart_display");
    }
    else {
     $(".sticky_cart").addClass("sticky_cart_display");
    }
  });
  
  $("#btn-sticky-cart").click(function(){
    $(".gif").css("display","block")
    $(".product-form__submit").trigger("click");

  });
	
})








$(function(){
  $(".elementor-search").on("click", function(){
    $(".search-module").fadeIn().css('display','flex');
  });
});
$(function(){
  $(".search-module").on("click", function(e){
    $(this).fadeOut().hide(1000);
  }).on("click", ".search-form__input", function(e) {
    e.stopPropagation();
  })
});
$('#hamburger-btn').click(function(e) {
  e.preventDefault();
  $('.push-wrapper').toggleClass("menu-active")
  $(this).toggleClass("is-active");
});

$(document).click(function(event) {
  event.preventDefault();
  if (!$(event.target).closest("#hamburger-btn,.mobile-menu" ).length) {
    $("body").find(".push-wrapper").removeClass("menu-active");
    $("#hamburger-btn").removeClass("is-active");
  }
});
new WOW().init();
$(function(){
  $(".base-block").on("click", function(){
    $(".header-top-popup").fadeIn().css('display','flex');
  });
});
$(function(){
  $(".login-module").on("click", function(e){
    $(this).fadeOut().hide(1000);
  }).on("click", ".login-module-content", function(e) {
    e.stopPropagation();
  })
});
$(function(){
  $(".close-module-toggle").on("click", function(){
    $(".login-module").fadeOut().hide(1000);
  });
});
$(".brand-carousel").lightGallery();
$(".brand-carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1500
});

$(function(){
  $(".price").on("click", function(){
    $(".price-popup").fadeIn().css('display','flex');
  });
});
$(function(){
  $(".catalog").on("click", function(){
    $(".catalog-popup").fadeIn().css('display','flex');
  });
});
$(function(){
  $(".three-d").on("click", function(){
    $(".three-d-popup").fadeIn().css('display','flex');
  });
});
$(function(){
  $(".consult").on("click", function(){
    $(".consult-popup").fadeIn().css('display','flex');
  });
});
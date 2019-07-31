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
  if (!$(event.target).closest("#hamburger-btn").length) {
    $("body").find(".push-wrapper").removeClass("menu-active");
    $("#hamburger-btn").removeClass("is-active");
  }
});

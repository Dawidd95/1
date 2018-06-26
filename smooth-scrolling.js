$(function() { // DOMContentLoaded
  $(".methods").on("click", function() {  //event listener
    $("html, body").animate({
      scrollTop: $(".offers-wrapper").offset().top-100 //dopisujac -300 bedzie do klasy odjac 300px
    }, 2000);
  });

  $(".faqs").on("click", function() {
    $("html,body").animate({
      scrollTop: $(".FAQ-wrapper").offset().top-100
    }, 2000);
  });
});

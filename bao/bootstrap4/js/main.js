$(document).ready(function(){
  console.log($(window).height())
;
  if($(window).height() >= 768){
    $('header').height($(window).height());
  }
 
  $(".navbar a").click(function(){
    $("body,html").animate({
      scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
   
  })
 
 })
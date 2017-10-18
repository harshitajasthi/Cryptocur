$(window). on("scroll", function() {
    if($(window). scrollTop() > 10) {
    $(".xyz"). addClass("active");
    } else {
    $(".xyz"). removeClass("active");
    }
    });

     $(document).ready(function (){
$('body').on('click', 'a', function () {
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);
  return false;
});
});

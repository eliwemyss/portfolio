$(document).ready(() => {
  let checked = $("#menu").prop("checked");
  //Close navigation bar if user clicks outside
  $(".content").on("click", () => {
    if (!checked && screen.width < 768) {
      $(".menu-content").css("max-height", 0);
      $("#menu").prop("checked", false);
    }
  });
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50 && screen.width > 768) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});
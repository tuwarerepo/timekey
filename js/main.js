
$("#contact-form").submit(function(e) {
  $('.form-messages').fadeOut();
  $button = $('#contact-form-submit');
  $form = $("#contact-form");
  $button.html('<i class="fa fa-spinner fa-spin"></i>');
  $.ajax({
    type: "POST",
    url: "./mailer.php",
    data: $form.serialize(),
    success: function(data){
        $form.trigger('reset');
        $button.html('Sent <i class="fa fa-check"></i>');
    },
    error: function(data){
      $button.html('Send');
      $('.form-messages').html(
        '<i class="fa fa-exclamation-circle fa-2x"></i> The message failed to send. Please try again');
      $('.form-messages').fadeIn();
    },
  });
  e.preventDefault(); 
});

$("#contact-form").delegate(':input', 'focus', function() {
    $('#contact-form-submit').html('Send');
})


$("#mailing-list").submit(function(e) {
  console.log("hi");
  $('.mailing-list-messages').fadeOut();
  $button = $('#mailing-list-submit');
  $form = $("#mailing-list");
  $button.html('<i class="fa fa-spinner fa-spin"></i>');
  $.ajax({
    type: "POST",
    url: "./mailing_list.php",
    data: $form.serialize(),
    success: function(data){
        $form.trigger('reset');
        $button.html('Sent <i class="fa fa-check"></i>');
    },
    error: function(data){
      $button.html('Send');
      $('.mailing-list-messages').html(
        '<i class="fa fa-exclamation-circle fa-2x"></i> Your email failed to send. Please try again');
      $('.mailing-list-messages').fadeIn();
    },
  });
  e.preventDefault(); 
});

$("#mailing-list").delegate(':input', 'focus', function() {
    $('#mailing-list-submit').html('Send');
})


$(".jumper").on("click", function( e ) {
  e.preventDefault();
  $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
  }, 2000);
});

// $(".jumper").click(function() {
//   $('html,body').animate({
//     scrollTop: $("#kickstarter").offset().top},
//     2000);
// });

function checkScroll(){
    var startY = $('.navbar').height() * 4; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

// if (window.chrome) {
//     $("[type=video\\\/mp4]").each(function() {
//         $(this).attr('src', $(this).attr('src').replace(".mp4", ".ogg"));
//         console.log($(this).attr('src', $(this).attr('src')));
//     });
// }



// IntroPage Start
$("#continue").hide()
$(".CoverScreen").hide();
$(".MidPage").hide();

$("#TvScreen").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
  }
);

$("#TvScreen").click(function(){
    $("#thought").hide();
    $("#TvScreen").hide();
    $("#continue").show();
    $(".CoverScreen").show();
// IntroPage End
});

// MidPage Start
$("#continue").click(function(){
    // MidPage Background Replacement
    $("body").css("background-image", 'url(MidSection1.png');
    $(".MidPage").show();
    // Hide the previous Instruction Screen
    $("#continue").hide();
    $(".CoverScreen").hide();
    // Instruction Screen End
    // MidPage1 Clickers
    $("#LeftImg").click(function() {
      $("#TvScreen").show();
    });
    $("#RightImg").click(function() {});
});


// MidPage End
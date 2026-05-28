// IntroPage Start
$("#answer").hide();
$("#continue").hide()
$("#CoverScreen").hide();
$("#MidPage").hide();

$("#TvScreen").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
  }
);

$("#TvScreen").click(function(){
    $("body").css("background-image", 'url(');
    $("#thought").hide();
    $("#TvScreen").hide();
    $("#answer").show();
    $("#continue").show();
    $("#CoverScreen").show();
    $("#answer").html("Your objective is to choose a door to go through. Each door will lead to an different path so choose wisely.")
});
// IntroPage End

// MidPage Start
$("#continue").click(function(){
    // MidPage Background Replacement
    $("body").css("background-image", 'url(MidSection1.png');
    $("#MidPage").show();
    // Hide the previous Instruction Screen
    $("#answer").hide();
    $("#continue").hide();
    $("#CoverScreen").hide();
    // Instruction Screen End
});


// MidPage End
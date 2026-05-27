// IntroPage Start
$("#answer").hide();
$("#continue").hide()
$("#CoverScreen").hide();
$("#MidPage").hide();

$("#TvScreen").click(function(){
    $("body").css("background-image", 'url(');
    $("#TvScreen").hide();
    $("#answer").show();
    $("3continue").show();
    $("#CoverScreen").show();
    $("#answer").html("Your objective is to choose a door to go through. Each door will lead to an different path so choose wisely.")
});
// IntroPage End

// MidPage Start
$("continue").click(function(){
    // MidPage Background Replacement
    $("body").css("background-image", 'url(');
    $("MidPage").show();
    // Hide the previous Instruction Screen
    $("#answer").hide();
    $("continue").hide();
    $("CoverScreen").hide();
    // Instruction Screen End
});


// MidPage End
// IntroPage Start
$("#continue").hide()
$(".CoverScreen").hide();
$(".MidPage").hide();
$(".lake").hide();
$(".forest").hide();
$(".cat").hide();

$("#TvScreen").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
  }
);

$("#TvScreen").click(function () {
  $("#thought").hide();
  $("#TvScreen").hide();
  $("#continue").show();
  $(".CoverScreen").show();
  // IntroPage End
});

// MidPage Start
$("#continue").click(function () {
  // MidPage Background Replacement
  $("body").css("background-image", 'url(MidSection1.png');
  $(".MidPage").show();
  // Hide the previous Instruction Screen
  $("#continue").hide();
  $(".CoverScreen").hide();
  // Instruction Screen End

  // MidPage1 Clickers

  // Forest path
  $("#LeftImg").click(function () {
    $("body").css("background-image", 'url(forest.png');
    $(".MidPage").hide();
    $(".forest").show();

    // Forest Clickers
    $("#ForestLeftImg").click(function () {
      $("body").css("background-image", 'url(barrels.png');
      $(".forest").hide();
    });

    $("#ForestRightImg").click(function () {
      $("body").css("background-image", 'url(cats.png');
      $(".forest").hide();
      $(".cat").show();
      $("#catAnswer").html("You feel a sudden surge of gravity, in an instant your body contorts into a grotesque form. You, in an attempt at desperation attempt to cry out for help. Meow! meow?? Herein lies your soul eternally in rest in the gentle embrace of the Cat's Cradle");
      
      $("#catBack").click(function () {
        $("body").css("background-image", 'url(MidSection1.png');
        $(".cat").hide();
        $(".MidPage").show();
      });
    });

  });

  // Lake Path
  $("#RightImg").click(function () {
    $("body").css("background-image", 'url(lake.png');
    $(".MidPage").hide();
    $(".lake").show();

    // Lake Clickers
    $("#LakeLeftImg").click(function () {
      $("body").css("background-image", 'url(MidSection1.png');
      $(".MidPage").show();
      $(".lake").hide();
    });

    $("#LakeRightImg").click(function () { });

  });
});


// MidPage End
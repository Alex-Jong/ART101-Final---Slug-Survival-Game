// Hiding stuff
$("#continue").hide()
$("#RiverFalldialog").hide();
$("#bannanajoesDialog").hide()
$("#Merilldialog").hide();
$(".CoverScreen").hide();
$(".MidPage").hide();
$(".lake").hide();
$(".forest").hide();
$(".cat").hide();
$(".downRiver").hide();
$(".merill").hide();
$(".barrel").hide();
$(".barrelAsk").hide();
$("#burger").hide();
$("#coffee").hide();
$("#FoodRoomDialog").hide();

// IntroPage Start
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
});
// IntroPage End

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

    // Barrel Scene
    $("#ForestLeftImg").click(function () {
      $("body").css("background-image", 'url(barrels.png');
      $(".forest").hide();
      $(".barrel").show();
    });
  });
});

$("#BarrelDoor").click(function () {
  ask();
});

function ask() {

  let user = prompt("Are you sure you want to enter? [Y/N]");

  if (user == "Y") {
    $("body").css("background-image", 'url(Backrooms.png');
    $(".barrelAsk").show();
    $(".barrel").hide();
    $("#CattyButton").hide();
    $("#BackroomsDialog").html("You've arrived at an unknown place");

    $("#BackroomsDialog").click(function () {
      $("#Slug2").html("<img src='SlugUpset.png'>");
      $("#BackroomsDialog").html("Maybe look around for an escape?");

      $("#BackroomsDialog").click(function () {
        $("#Slug2").hide();
        $("#BackroomsDialog").hide();
        $("#CattyButton").show();

        $("#CattyButton").click(function () {
          $("body").css("background-image", 'url(');
        });
      });
    });
  }
}

// Cat Scene
$("#ForestRightImg").click(function () {
  $("body").css("background-image", 'url(cats.png');
  $(".forest").hide();
  $(".cat").show();
  $("Slug").show();
  $("#catAnswer1").html("You've arrived at an unknown place");

  $("#catAnswer1").click(function () {
    $("#catAnswer1").html("Um Where am I?");

    $("#catAnswer1").click(function () {
      $("#CatPortrait").html("<img src='CatHappy.png'>");
      $("#catAnswer1").html("You my friend are at the Cat's Cradle");

      $("#catAnswer1").click(function () {
        $("#Slug").html("<img src='SlugUpset.png'>");
        $("#catAnswer1").html("So uhh did I trespass?");

        $("#catAnswer1").click(function () {
          $("#CatPortrait").html("<img src='CatAngry.png'>");
          $("#catAnswer1").html("Yes, yes you did and now I must turn you into a cat");

          $("#catAnswer1").click(function () {
            $("#Slug").hide();
            $("#catTitle").hide();
            $("#CatPortrait").hide();
            $("body").css("background-image", 'url(BlackScreen.avif');
            $("#catAnswer1").html("You feel a sudden surge of gravity, like up is down and down is up, you lose your sense of direction and feel like you are falling endlessly...");

            $("#catAnswer1").click(function () {
              $(".cat").hide()
            });
          });
        });
      });
    });
  });
});

// Lake Path
$("#RightImg").click(function () {
  $("body").css("background-image", 'url(lake.png');
  $(".MidPage").hide();
  $(".lake").show();

  // Lake Clickers

  // Return to Forest Scene
  $("#LakeLeftImg").click(function () {
    $("body").css("background-image", 'url(MidSection1.png');
    $(".MidPage").show();
    $(".lake").hide();
  });

  // Down River Scene
  $("#LakeRightImg").click(function () {
    $("body").css("background-image", 'url(DownRiver.png');
    $(".downRiver").show();
    $(".lake").hide()

    $("#RiverUp").click(function () {
      $("body").css("background-image", 'url(MerillMarket.png');
      $(".downRiver").hide();
      $(".merill").show();

      // Merill Clickers
      $("#explore").click(function () {
        $("body").css("background-image", 'url(BannanaJoes.png');
        $("#bannanajoesDialog").show();
        $(".merill").hide();
        $("#bannanajoesDialog").html("You look at aw at the amazing store, deciding you are a bit hungry you enter the restaurant...");
      });

      $("#bannanajoesDialog").click(function () {
        $("body").css("background-image", 'url(BlackScreen.avif');
        $("#bannanajoesDialog").html("You enter the restaurant only for your vision to go blank for a bit...")

        $("#bannanajoesDialog").click(function () {
          $("body").css("background-image", 'url(FoodRoom.png');
          $("#bannanajoesDialog").html("You regain your sight and look around the room...")

          $("#bannanajoesDialog").click(function () {
            $("#bannanajoesDialog").hide();
            $("#FoodRoomDialog").show();

            $("#FoodRoomDialog").click(function () {
              $("#burger").show();
              $("#FoodRoomDialog").html("Hello there..")
            });
          });
        });
      });

      $("#enter").click(function () {
        $("body").css("background-image", 'url(BlackScreen.avif');
        $(".merill").hide();
        $("#Merilldialog").show();
        $("#Merilldialog").html("You enter the store only for your vision to go blank for a bit...")

        $("#Merilldialog").click(function () {
          $("body").css("background-image", 'url(FoodRoom.png');
          $("#Merilldialog").html("Your sight comes back to you as you behold a sight")

          $("#Merilldialog").click(function () {

            $("#Merilldialog").html("Your sight comes back to you as you behold a sight")
          });
        });
      });
    });

    $("#RiverContinue").click(function () {
      $("body").css("background-image", 'url(ContinueDownRiver.png');
      $(".downRiver").hide();
      $("#RiverFalldialog").show();
      $("#RiverFalldialog").html("You continue down the river only to slip and fall down the waterfall.. everything fades to black");

      $("#RiverFalldialog").click(function () {
        $("body").css("background-image", 'url(BlackScreen.avif');
        $("#RiverFalldialog").html("As you are out you start to gradually wake up...");

        $("#RiverFalldialog").click(function () {
          $("body").css("background-image", 'url(RiverRoom.jpg');
          $("#RiverFalldialog").hide();
        });
      });
    });
  });
});

// River Up Path

// Down the River more


// Uphill Scene

// MidPage End

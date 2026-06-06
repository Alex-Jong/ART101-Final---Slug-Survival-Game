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
$("#shelf").hide();
$("#bread").hide();
$("#PoolButton").hide();
$(".FoodRoomsDoor").hide();

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
          $("body").css("background-image", 'url(CatRoom.png');
          $("#CattyButton").hide();
          $(".FoodRoomsDoor").show();

          $("#exit").click(function () {
            ask();
          });

          function ask() {

            let user = prompt("What is the passcode? MAKE SURE TO VISIT THE FOOD ROOM FIRST OR ELSE!!!");

            if (user == "1738") {

            }
            else {

            }
          }

          $("#FoodDoor").click(function () {
            $("body").css("background-image", 'url(FoodRoom.png');
            $(".FoodRoomsDoor").hide();
            $("#FoodRoomDialog").show();

            $("#FoodRoomDialog").click(function () {
              $("#burger").show();
              $("#FoodRoomDialog").html("Hello there..")

              $("#FoodRoomDialog").click(function () {
                $("#FoodRoomDialog").html("Welcome to my restaurant")

                $("#FoodRoomDialog").click(function () {
                  $("#FoodRoomDialog").html("To escape this maze there is a door, yet it needs a code...")

                  $("#FoodRoomDialog").click(function () {
                    $("#FoodRoomDialog").html("Find out how much my order of a Ham & Cheese Sandwhich costs and I'll give you the code")

                    $("#FoodRoomDialog").click(function () {
                      $("#FoodRoomDialog").hide();
                      $("#shelf").show();

                      $("#shelf").click(function () {
                        $("body").css("background-image", 'url(shelf.jpg');
                        $("#shelf").hide();
                        $("#burger").hide();
                        $("#bread").show();

                        $("#bread").hover(
                          function () {
                            $("#Breadthought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Breadthought").stop(true, true).slideUp(300);
                          }
                        );
                      });
                    });
                  });
                });
              });
            })
          });
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
              $("body").css("background-image", 'url(CatRoom.png');
              $("#catAnswer").hide();
              $("#PoolButton").hide();
              $(".FoodRoomsDoor").show();

              $("#exit").click(function () {
                ask();
              });

              function ask() {

                let user = prompt("What is the passcode? MAKE SURE TO VISIT THE FOOD ROOM FIRST OR ELSE!!!");

                if (user == "1738") {

                }
                else {

                }
              }

              $("#FoodDoor").click(function () {
                $("body").css("background-image", 'url(FoodRoom.png');
                $(".FoodRoomsDoor").hide();
                $("#FoodRoomDialog").show();

                $("#FoodRoomDialog").click(function () {
                  $("#burger").show();
                  $("#FoodRoomDialog").html("Hello there..")

                  $("#FoodRoomDialog").click(function () {
                    $("#FoodRoomDialog").html("Welcome to my restaurant")

                    $("#FoodRoomDialog").click(function () {
                      $("#FoodRoomDialog").html("To escape this maze there is a door, yet it needs a code...")

                      $("#FoodRoomDialog").click(function () {
                        $("#FoodRoomDialog").html("Find out how much my order of a Ham & Cheese Sandwhich costs and I'll give you the code")

                        $("#FoodRoomDialog").click(function () {
                          $("#FoodRoomDialog").hide();
                          $("#shelf").show();

                          $("#shelf").click(function () {
                            $("body").css("background-image", 'url(shelf.jpg');
                            $("#shelf").hide();
                            $("#burger").hide();
                            $("#bread").show();

                            $("#bread").hover(
                              function () {
                                $("#Breadthought").stop(true, true).slideDown(300);
                              },
                              function () {
                                $("#Breadthought").stop(true, true).slideUp(300);
                              }
                            );
                          });
                        });
                      });
                    });
                  });
                })
              });
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

              $("#FoodRoomDialog").click(function () {
                $("#FoodRoomDialog").html("Welcome to my restaurant")

                $("#FoodRoomDialog").click(function () {
                  $("#FoodRoomDialog").html("To escape this maze there is a door, yet it needs a code...")

                  $("#FoodRoomDialog").click(function () {
                    $("#FoodRoomDialog").html("Find out how much my order of a Ham & Cheese Sandwhich costs and I'll give you the code")

                    $("#FoodRoomDialog").click(function () {
                      $("#FoodRoomDialog").hide();
                      $("#shelf").show();

                      $("#shelf").click(function () {
                        $("body").css("background-image", 'url(shelf.jpg');
                        $("#shelf").hide();
                        $("#burger").hide();
                        $("#bread").show();

                        $("#bread").hover(
                          function () {
                            $("#Breadthought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Breadthought").stop(true, true).slideUp(300);
                          }
                        );
                      });
                    });
                  });
                });
              });
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
            $("#Merilldialog").hide();
            $("#FoodRoomDialog").show();

            $("#FoodRoomDialog").click(function () {
              $("#coffee").show();
              $("#FoodRoomDialog").html("Hello there..")

              $("#FoodRoomDialog").click(function () {
                $("#FoodRoomDialog").html("Welcome to my restaurant")

                $("#FoodRoomDialog").click(function () {
                  $("#FoodRoomDialog").html("To escape this maze there is a door, yet it needs a code...")

                  $("#FoodRoomDialog").click(function () {
                    $("#FoodRoomDialog").html("Find out how much my order of a Ham & Cheese Sandwhich costs and I'll give you the code")

                    $("#FoodRoomDialog").click(function () {
                      $("#FoodRoomDialog").hide();
                      $("#shelf").show();

                      $("#shelf").click(function () {
                        $("body").css("background-image", 'url(shelf.jpg');
                        $("#shelf").hide();
                        $("#coffee").hide();
                        $("#bread").show();
                      });
                    });
                  });
                });
              });
            });
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
          $("body").css("background-image", 'url(RiverRoom.png');
          $("#RiverFalldialog").hide();
          $("#PoolButton").show();

          $("#PoolButton").click(function () {
            $("body").css("background-image", 'url(CatRoom.png');
            $("#PoolButton").hide();
            $(".FoodRoomsDoor").show();

            $("#exit").click(function () {
              ask();
            });

            function ask() {

              let user = prompt("What is the passcode? MAKE SURE TO VISIT THE FOOD ROOM FIRST OR ELSE!!!");

              if (user == "1738") {

              }
              else {

              }
            }

            $("#FoodDoor").click(function () {
              $("body").css("background-image", 'url(FoodRoom.png');
              $(".FoodRoomsDoor").hide();
              $("#FoodRoomDialog").show();

              $("#FoodRoomDialog").click(function () {
                $("#burger").show();
                $("#FoodRoomDialog").html("Hello there..")

                $("#FoodRoomDialog").click(function () {
                  $("#FoodRoomDialog").html("Welcome to my restaurant")

                  $("#FoodRoomDialog").click(function () {
                    $("#FoodRoomDialog").html("To escape this maze there is a door, yet it needs a code...")

                    $("#FoodRoomDialog").click(function () {
                      $("#FoodRoomDialog").html("Find out how much my order of a Ham & Cheese Sandwhich costs and I'll give you the code")

                      $("#FoodRoomDialog").click(function () {
                        $("#FoodRoomDialog").hide();
                        $("#shelf").show();

                        $("#shelf").click(function () {
                          $("body").css("background-image", 'url(shelf.jpg');
                          $("#shelf").hide();
                          $("#burger").hide();
                          $("#bread").show();

                          $("#bread").hover(
                            function () {
                              $("#Breadthought").stop(true, true).slideDown(300);
                            },
                            function () {
                              $("#Breadthought").stop(true, true).slideUp(300);
                            }
                          );
                        });
                      });
                    });
                  });
                });
              })
            });
          });
        });
      });
    });
  });
});

// River Up Path

// Down the River more


// Uphill Scene

// MidPage End

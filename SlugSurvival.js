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
$("#back").hide();
$("#ham").hide();
$("#cheese").hide();
$("#bannana").hide();
$("#backing").hide();
$("#GoodEnding").hide();
$("#BadEnding").hide();
$("#exit1").hide()
$("#FoodDoor1").hide()

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
  $("body").css("background-image", 'url(MidSection1.png');
  $(".MidPage").show();
  $("#continue").hide();
  $(".CoverScreen").hide();

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
  askEnter();
});

// Enter Backrooms Enterance
function askEnter() {

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

        // Walk to Cat Room
        $("#CattyButton").click(function () {
          $("body").css("background-image", 'url(CatRoom.png');
          $("#CattyButton").hide();
          $(".FoodRoomsDoor").show();

          $("#exit").click(function () {
            askCode();
          });

          function askCode() {

            let user = prompt("MAKE SURE TO VISIT THE FOOD ROOM FIRST!!!");

            if (user == "1738") {

            }
            else {

            }
          }

          // Walk to Food Room
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

                      // Look at shelf
                      $("#shelf").click(function () {
                        $("body").css("background-image", 'url(shelf.jpg');
                        $("#shelf").hide();
                        $("#burger").hide();
                        $("#bread").show();
                        $("#ham").show();
                        $("#cheese").show();
                        $("#back").show();
                        $("#bannana").show();

                        $("#bread").hover(
                          function () {
                            $("#Breadthought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Breadthought").stop(true, true).slideUp(300);
                          }
                        );

                        $("#ham").hover(
                          function () {
                            $("#Hamthought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Hamthought").stop(true, true).slideUp(300);
                          }
                        );

                        $("#cheese").hover(
                          function () {
                            $("#Cheesethought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Cheesethought").stop(true, true).slideUp(300);
                          }
                        );

                        $("#bannana").hover(
                          function () {
                            $("#Bannanathought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Bannanathought").stop(true, true).slideUp(300);
                          }
                        );

                        // Go back to Food Room
                        $("#back").click(function () {
                          $("body").css("background-image", 'url(FoodRoom.png');
                          $("#bread").hide();
                          $("#ham").hide();
                          $("#cheese").hide();
                          $("#back").hide();
                          $("#FoodRoomDialog").show();
                          $("#bannana").hide();
                          $("#FoodRoomDialog").html("So did you find the price? Click on my portrait if you found out")
                          $("#burger").show();
                          $("#shelf").hide();
                          $("#backing").show();

                          $("#burger").click(function () {
                            askPrice();
                          });

                          function askPrice() {

                            let user = prompt("What is the total price of a Ham & Cheese Sandwhich?");

                            if (user == "$63") {
                              $("#FoodRoomDialog").html("The code is 1738")
                            }
                            else {
                              $("#FoodRoomDialog").html("Nope, try again..")
                            }
                          }

                          // Go Back to Cat Room
                          $("#backing").click(function () {
                            $("body").css("background-image", 'url(CatRoom.png');
                            $("#exit1").show();
                            $("#FoodDoor1").show()
                            $("#FoodRoomDialog").hide();
                            $("#burger").hide();
                            $("#backing").hide();

                            // Ending
                            $("#exit1").click(function () {
                              askEnd();
                            });

                            function askEnd() {

                              let user = prompt("What is the passcode?");

                              if (user == "1738") {
                                $("body").css("background-image", 'url(BlackScreen.avif');
                                $("#exit1").hide();
                                $("#FoodDoor1").hide();
                                $("#GoodEnding").show();
                                $("#GoodEnding").html("The door opens and your sight is temporarily blinded");

                                $("#GoodEnding").click(function () {
                                  $("#GoodEnding").html("In pitch blackness you take a brave step and move foward..");

                                  $("#GoodEnding").click(function () {
                                    $("#GoodEnding").html("You Reached the Good Ending");
                                    $("body").css("background-image", 'url(GoodEnding.png');
                                  });
                                });
                              }
                              else {
                                $("body").css("background-image", 'url(BlackScreen.avif');
                                $("#FoodDoor1").hide();
                                $("#exit1").hide()
                                $("#BadEnding").show();
                                $("#BadEnding").html("The door opens and your sight is temporarily blinded");

                                $("#BadEnding").click(function () {
                                  $("#BadEnding").html("In pitch blackness you take a brave step and move foward..");

                                  $("#BadEnding").click(function () {
                                    $("#BadEnding").html("You Reached the Bad Ending");
                                    $("body").css("background-image", 'url(BadEnding.png');
                                  });
                                });
                              }
                            }
                          });
                        });
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
          $("#catAnswer1").html("Yes, yes you did and now I must destroy you");

          // Transition Between Cat's Cradle and Cat Room
          $("#catAnswer1").click(function () {
            $("#Slug").hide();
            $("#catTitle").hide();
            $("#CatPortrait").hide();
            $("body").css("background-image", 'url(BlackScreen.avif');
            $("#catAnswer1").html("You feel a sudden surge of gravity, like up is down and down is up, you lose your sense of direction and feel like you are falling endlessly...");

            // Cat Room Scene
            $("#catAnswer1").click(function () {
              $("body").css("background-image", 'url(CatRoom.png');
              $("#catAnswer").hide();
              $("#PoolButton").hide();
              $(".FoodRoomsDoor").show();

              $("#exit").click(function () {
                askCode();
              });

              function askCode() {

                let user = prompt("MAKE SURE TO VISIT THE FOOD ROOM FIRST!!!");

                if (user == "1738") {

                }
                else {

                }
              }

              // Walk to Food Room
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

                          // Look at shelf
                          $("#shelf").click(function () {
                            $("body").css("background-image", 'url(shelf.jpg');
                            $("#shelf").hide();
                            $("#burger").hide();
                            $("#bread").show();
                            $("#ham").show();
                            $("#cheese").show();
                            $("#back").show();
                            $("#bannana").show();

                            $("#bread").hover(
                              function () {
                                $("#Breadthought").stop(true, true).slideDown(300);
                              },
                              function () {
                                $("#Breadthought").stop(true, true).slideUp(300);
                              }
                            );

                            $("#ham").hover(
                              function () {
                                $("#Hamthought").stop(true, true).slideDown(300);
                              },
                              function () {
                                $("#Hamthought").stop(true, true).slideUp(300);
                              }
                            );

                            $("#cheese").hover(
                              function () {
                                $("#Cheesethought").stop(true, true).slideDown(300);
                              },
                              function () {
                                $("#Cheesethought").stop(true, true).slideUp(300);
                              }
                            );

                            $("#bannana").hover(
                              function () {
                                $("#Bannanathought").stop(true, true).slideDown(300);
                              },
                              function () {
                                $("#Bannanathought").stop(true, true).slideUp(300);
                              }
                            );

                            // Back to Food Room
                            $("#back").click(function () {
                              $("body").css("background-image", 'url(FoodRoom.png');
                              $("#bread").hide();
                              $("#ham").hide();
                              $("#cheese").hide();
                              $("#back").hide();
                              $("#bannana").hide();
                              $("#FoodRoomDialog").show();
                              $("#FoodRoomDialog").html("So did you find the price? Click on my portrait if you found out")
                              $("#burger").show();
                              $("#shelf").hide();
                              $("#backing").show();

                              $("#burger").click(function () {
                                askPrice();
                              });

                              function askPrice() {

                                let user = prompt("What is the total price of a Ham & Cheese Sandwhich?");

                                if (user == "$63") {
                                  $("#FoodRoomDialog").html("The code is 1738")
                                }
                                else {
                                  $("#FoodRoomDialog").html("Nope, try again..")
                                }
                              }

                              // Walk back to Cat Room
                              $("#backing").click(function () {
                                $("body").css("background-image", 'url(CatRoom.png');
                                $("#exit1").show();
                                $("#FoodDoor1").show()
                                $("#FoodRoomDialog").hide();
                                $("#burger").hide();
                                $("#backing").hide();

                                // Ending
                                $("#exit1").click(function () {
                                  askEnd();
                                });

                                function askEnd() {

                                  let user = prompt("What is the passcode?");

                                  if (user == "1738") {
                                    $("body").css("background-image", 'url(BlackScreen.avif');
                                    $("#exit1").hide();
                                    $("#FoodDoor1").hide();
                                    $("#GoodEnding").show();
                                    $("#GoodEnding").html("The door opens and your sight is temporarily blinded");

                                    $("#GoodEnding").click(function () {
                                      $("#GoodEnding").html("In pitch blackness you take a brave step and move foward..");

                                      $("#GoodEnding").click(function () {
                                        $("#GoodEnding").html("You Reached the Good Ending");
                                        $("body").css("background-image", 'url(GoodEnding.png');
                                      });
                                    });
                                  }
                                  else {
                                    $("body").css("background-image", 'url(BlackScreen.avif');
                                    $("#FoodDoor1").hide();
                                    $("#exit1").hide()
                                    $("#BadEnding").show();
                                    $("#BadEnding").html("The door opens and your sight is temporarily blinded");

                                    $("#BadEnding").click(function () {
                                      $("#BadEnding").html("In pitch blackness you take a brave step and move foward..");

                                      $("#BadEnding").click(function () {
                                        $("#BadEnding").html("You Reached the Bad Ending");
                                        $("body").css("background-image", 'url(BadEnding.png');
                                      });
                                    });
                                  }
                                }
                              });
                            });
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

    // Merill Market Clickers
    $("#RiverUp").click(function () {
      $("body").css("background-image", 'url(MerillMarket.png');
      $(".downRiver").hide();
      $(".merill").show();

      // Enter Bannana Joes
      $("#explore").click(function () {
        $("body").css("background-image", 'url(BannanaJoes.png');
        $("#bannanajoesDialog").show();
        $(".merill").hide();
        $("#bannanajoesDialog").html("You look at aw at the amazing store, deciding you are a bit hungry you enter the restaurant...");
      });

      // Transition between Bannana Joes and Food Room
      $("#bannanajoesDialog").click(function () {
        $("body").css("background-image", 'url(BlackScreen.avif');
        $("#bannanajoesDialog").html("You enter the restaurant only for your vision to go blank for a bit...")

        // Enter Food Room
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

                      // Look at shelf
                      $("#shelf").click(function () {
                        $("body").css("background-image", 'url(shelf.jpg');
                        $("#shelf").hide();
                        $("#burger").hide();
                        $("#bread").show();
                        $("#ham").show();
                        $("#cheese").show();
                        $("#back").show();
                        $("#bannana").show();

                        $("#bread").hover(
                          function () {
                            $("#Breadthought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Breadthought").stop(true, true).slideUp(300);
                          }
                        );

                        $("#ham").hover(
                          function () {
                            $("#Hamthought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Hamthought").stop(true, true).slideUp(300);
                          }
                        );

                        $("#cheese").hover(
                          function () {
                            $("#Cheesethought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Cheesethought").stop(true, true).slideUp(300);
                          }
                        );

                        $("#bannana").hover(
                          function () {
                            $("#Bannanathought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Bannanathought").stop(true, true).slideUp(300);
                          }
                        );

                        // Go back to Food Room
                        $("#back").click(function () {
                          $("body").css("background-image", 'url(FoodRoom.png');
                          $("#bread").hide();
                          $("#ham").hide();
                          $("#cheese").hide();
                          $("#back").hide();
                          $("#bannana").hide();
                          $("#FoodRoomDialog").show();
                          $("#FoodRoomDialog").html("So did you find the price? Click on my portrait if you found out")
                          $("#burger").show();
                          $("#shelf").hide();
                          $("#backing").show();

                          $("#burger").click(function () {
                            askPrice();
                          });

                          function askPrice() {

                            let user = prompt("What is the total price of a Ham & Cheese Sandwhich?");

                            if (user == "$63") {
                              $("#FoodRoomDialog").html("The code is 1738")
                            }
                            else {
                              $("#FoodRoomDialog").html("Nope, try again..")
                            }
                          }

                          // Walk back to Cat Room
                          $("#backing").click(function () {
                            $("body").css("background-image", 'url(CatRoom.png');
                            $("#exit1").show();
                            $("#FoodDoor1").show()
                            $("#FoodRoomDialog").hide();
                            $("#burger").hide();
                            $("#backing").hide();

                            // Ending
                            $("#exit1").click(function () {
                              askEnd();
                            });

                            function askEnd() {

                              let user = prompt("What is the passcode?");

                              if (user == "1738") {
                                $("body").css("background-image", 'url(BlackScreen.avif');
                                $("#exit1").hide();
                                $("#FoodDoor1").hide();
                                $("#GoodEnding").show();
                                $("#GoodEnding").html("The door opens and your sight is temporarily blinded");

                                $("#GoodEnding").click(function () {
                                  $("#GoodEnding").html("In pitch blackness you take a brave step and move foward..");

                                  $("#GoodEnding").click(function () {
                                    $("#GoodEnding").html("You Reached the Good Ending");
                                    $("body").css("background-image", 'url(GoodEnding.png');
                                  });
                                });
                              }
                              else {
                                $("body").css("background-image", 'url(BlackScreen.avif');
                                $("#FoodDoor1").hide();
                                $("#exit1").hide()
                                $("#BadEnding").show();
                                $("#BadEnding").html("The door opens and your sight is temporarily blinded");

                                $("#BadEnding").click(function () {
                                  $("#BadEnding").html("In pitch blackness you take a brave step and move foward..");

                                  $("#BadEnding").click(function () {
                                    $("#BadEnding").html("You Reached the Bad Ending");
                                    $("body").css("background-image", 'url(BadEnding.png');
                                  });
                                });
                              }
                            }
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
      });

      // Transition between Merill Market and Food Room
      $("#enter").click(function () {
        $("body").css("background-image", 'url(BlackScreen.avif');
        $(".merill").hide();
        $("#Merilldialog").show();
        $("#Merilldialog").html("You enter the store only for your vision to go blank for a bit...")

        // Enter Food Room
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

                      // Look at shelf
                      $("#shelf").click(function () {
                        $("body").css("background-image", 'url(shelf.jpg');
                        $("#shelf").hide();
                        $("#coffee").hide();
                        $("#bread").show();
                        $("#ham").show();
                        $("#cheese").show();
                        $("#back").show();
                        $("#bannana").show();

                        $("#bread").hover(
                          function () {
                            $("#Breadthought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Breadthought").stop(true, true).slideUp(300);
                          }
                        );

                        $("#ham").hover(
                          function () {
                            $("#Hamthought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Hamthought").stop(true, true).slideUp(300);
                          }
                        );

                        $("#cheese").hover(
                          function () {
                            $("#Cheesethought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Cheesethought").stop(true, true).slideUp(300);
                          }
                        );

                        $("#bannana").hover(
                          function () {
                            $("#Bannanathought").stop(true, true).slideDown(300);
                          },
                          function () {
                            $("#Bannanathought").stop(true, true).slideUp(300);
                          }
                        );

                        // Go back to Food Room
                        $("#back").click(function () {
                          $("body").css("background-image", 'url(FoodRoom.png');
                          $("#bread").hide();
                          $("#ham").hide();
                          $("#cheese").hide();
                          $("#bannana").hide();
                          $("#back").hide();
                          $("#FoodRoomDialog").show();
                          $("#FoodRoomDialog").html("So did you find the price? Click on my portrait if you found out")
                          $("#coffee").show();
                          $("#shelf").hide();
                          $("#backing").show();

                          $("#coffee").click(function () {
                            askPrice();
                          });

                          function askPrice() {

                            let user = prompt("What is the total price of a Ham & Cheese Sandwhich?");

                            if (user == "$63") {
                              $("#FoodRoomDialog").html("The code is 1738")
                            }
                            else {
                              $("#FoodRoomDialog").html("Nope, try again..")
                            }
                          }

                          // Walk back to Cat Room
                          $("#backing").click(function () {
                            $("body").css("background-image", 'url(CatRoom.png');
                            $("#exit1").show();
                            $("#FoodDoor1").show()
                            $("#FoodRoomDialog").hide();
                            $("#coffee").hide();
                            $("#backing").hide();

                            // Ending
                            $("#exit1").click(function () {
                              askEnd();
                            });

                            function askEnd() {

                              let user = prompt("What is the passcode?");

                              if (user == "1738") {
                                $("body").css("background-image", 'url(BlackScreen.avif');
                                $("#exit1").hide();
                                $("#FoodDoor1").hide();
                                $("#GoodEnding").show();
                                $("#GoodEnding").html("The door opens and your sight is temporarily blinded");

                                $("#GoodEnding").click(function () {
                                  $("#GoodEnding").html("In pitch blackness you take a brave step and move foward..");

                                  $("#GoodEnding").click(function () {
                                    $("#GoodEnding").html("You Reached the Good Ending");
                                    $("body").css("background-image", 'url(GoodEnding.png');
                                  });
                                });
                              }
                              else {
                                $("body").css("background-image", 'url(BlackScreen.avif');
                                $("#FoodDoor1").hide();
                                $("#exit1").hide()
                                $("#BadEnding").show();
                                $("#BadEnding").html("The door opens and your sight is temporarily blinded");

                                $("#BadEnding").click(function () {
                                  $("#BadEnding").html("In pitch blackness you take a brave step and move foward..");

                                  $("#BadEnding").click(function () {
                                    $("#BadEnding").html("You Reached the Bad Ending");
                                    $("body").css("background-image", 'url(BadEnding.png');
                                  });
                                });
                              }
                            }
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
      });
    });

    // Continue down the river scene
    $("#RiverContinue").click(function () {
      $("body").css("background-image", 'url(ContinueDownRiver.png');
      $(".downRiver").hide();
      $("#RiverFalldialog").show();
      $("#RiverFalldialog").html("You continue down the river only to slip and fall down the waterfall.. everything fades to black");

      // Transition from river to Pool Room
      $("#RiverFalldialog").click(function () {
        $("body").css("background-image", 'url(BlackScreen.avif');
        $("#RiverFalldialog").html("As you are out you start to gradually wake up...");

        $("#RiverFalldialog").click(function () {
          $("body").css("background-image", 'url(RiverRoom.png');
          $("#RiverFalldialog").hide();
          $("#PoolButton").show();

          // Dive into water to Cat Room
          $("#PoolButton").click(function () {
            $("body").css("background-image", 'url(CatRoom.png');
            $("#PoolButton").hide();
            $(".FoodRoomsDoor").show();

            $("#exit").click(function () {
              askCode();
            });

            function askCode() {

              let user = prompt("MAKE SURE TO VISIT THE FOOD ROOM FIRST!!!");

              if (user == "1738") {

              }
              else {

              }
            }

            // Walk to Food Room
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

                        // Look at shelf
                        $("#shelf").click(function () {
                          $("body").css("background-image", 'url(shelf.jpg');
                          $("#shelf").hide();
                          $("#burger").hide();
                          $("#bread").show();
                          $("#ham").show();
                          $("#cheese").show();
                          $("#bannana").show();
                          $("#back").show();

                          $("#bread").hover(
                            function () {
                              $("#Breadthought").stop(true, true).slideDown(300);
                            },
                            function () {
                              $("#Breadthought").stop(true, true).slideUp(300);
                            }
                          );

                          $("#ham").hover(
                            function () {
                              $("#Hamthought").stop(true, true).slideDown(300);
                            },
                            function () {
                              $("#Hamthought").stop(true, true).slideUp(300);
                            }
                          );

                          $("#cheese").hover(
                            function () {
                              $("#Cheesethought").stop(true, true).slideDown(300);
                            },
                            function () {
                              $("#Cheesethought").stop(true, true).slideUp(300);
                            }
                          );

                          $("#bannana").hover(
                            function () {
                              $("#Bannanathought").stop(true, true).slideDown(300);
                            },
                            function () {
                              $("#Bannanathought").stop(true, true).slideUp(300);
                            }
                          );

                          // Go back to Food Room
                          $("#back").click(function () {
                            $("body").css("background-image", 'url(FoodRoom.png');
                            $("#bread").hide();
                            $("#ham").hide();
                            $("#cheese").hide();
                            $("#back").hide();
                            $("#bannana").hide();
                            $("#FoodRoomDialog").show();
                            $("#FoodRoomDialog").html("So did you find the price? Click on my portrait if you found out")
                            $("#burger").show();
                            $("#shelf").hide();
                            $("#backing").show();

                            $("#burger").click(function () {
                              askPrice();
                            });

                            function askPrice() {

                              let user = prompt("What is the total price of a Ham & Cheese Sandwhich?");

                              if (user == "$63") {
                                $("#FoodRoomDialog").html("The code is 1738")
                              }
                              else {
                                $("#FoodRoomDialog").html("Nope, try again..")
                              }
                            }

                            // Walk back to Cat Room
                            $("#backing").click(function () {
                              $("body").css("background-image", 'url(CatRoom.png');
                              $("#exit1").show();
                              $("#FoodDoor1").show()
                              $("#FoodRoomDialog").hide();
                              $("#burger").hide();
                              $("#backing").hide();

                              // Ending
                              $("#exit1").click(function () {
                                askEnd();
                              });

                              function askEnd() {

                                let user = prompt("What is the passcode?");

                                if (user == "1738") {
                                  $("body").css("background-image", 'url(BlackScreen.avif');
                                  $("#exit1").hide();
                                  $("#FoodDoor1").hide();
                                  $("#GoodEnding").show();
                                  $("#GoodEnding").html("The door opens and your sight is temporarily blinded");

                                  $("#GoodEnding").click(function () {
                                    $("#GoodEnding").html("In pitch blackness you take a brave step and move foward..");

                                    $("#GoodEnding").click(function () {
                                      $("#GoodEnding").html("You Reached the Good Ending");
                                      $("body").css("background-image", 'url(GoodEnding.png');
                                    });
                                  });
                                }
                                else {
                                  $("body").css("background-image", 'url(BlackScreen.avif');
                                  $("#FoodDoor1").hide();
                                  $("#exit1").hide()
                                  $("#BadEnding").show();
                                  $("#BadEnding").html("The door opens and your sight is temporarily blinded");

                                  $("#BadEnding").click(function () {
                                    $("#BadEnding").html("In pitch blackness you take a brave step and move foward..");

                                    $("#BadEnding").click(function () {
                                      $("#BadEnding").html("You Reached the Bad Ending");
                                      $("body").css("background-image", 'url(BadEnding.png');
                                    });
                                  });
                                }
                              }
                            });
                          });
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
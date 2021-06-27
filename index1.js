var sequence = [];
var index = 0;
var level = 2;


$(document).on('keypress', function() {
  if ($("h1").text() === 'Press A Key to Start') {
  $("h1").text("Level 1");
  setTimeout(function(){randomColor();},300);
  }
});

  $('.btn').on('click', function(event){
    var e = event.target.id;

    if ($("h1").text() !== 'Press A Key to Start' && $("h1").text() !== "Game over, Press any key to Restart") {
      play(e);
      if(e == sequence[index]){
        index++;
        if(index == sequence.length){

          setTimeout(function() {
            $("h1").text("Level "+level);
            level++;
            randomColor();
          },1000);

        }
      }
      else{
        $("h1").text("Game over, Press any key to Restart");
        level = 2;
        sequence = [];
        play("restart");
        $(document).on('keypress', function() {
          if ($("h1").text() === "Game over, Press any key to Restart") {
          $("h1").text("Level 1");
          setTimeout(function(){randomColor();},300);}
        });
      }
    }

  });


  function randomColor(){
    var randomColor = (Math.floor(Math.random()* 4)) + 1;
    index = 0;
    switch (randomColor) {
      case 1:play('green');
            sequence.push('green');
        break;
      case 2:play('red');
              sequence.push('red');
        break;
      case 3:play('yellow');
            sequence.push('yellow');
        break;
      case 4:play('blue');
            sequence.push('blue');
        break;

    }
  }

    function play(randomColor){

    switch (randomColor) {
      case "green":
        $("#green").addClass("pressed");
        setTimeout(function() {
          $("#green").removeClass("pressed");
        }, 100);
        var audio = new Audio("green.mp3");
        audio.play();



        break;

        case "red":
          $("#red").addClass("pressed");
          setTimeout(function() {
            $("#red").removeClass("pressed");
          }, 100);
          var audio = new Audio("red.mp3");
          audio.play();



          break;

          case "yellow":
            $("#yellow").addClass("pressed");
            setTimeout(function() {
              $("#yellow").removeClass("pressed");
            }, 100);
            var audio = new Audio("yellow.mp3");
            audio.play();



            break;

            case "blue":
              $("#blue").addClass("pressed");
              setTimeout(function() {
                $("#blue").removeClass("pressed");
              }, 100);
              var audio = new Audio("blue.mp3");
              audio.play();



              break;

            case "restart":

               $("body").addClass("game-over");
               setTimeout(function() {
               $("body").removeClass("game-over");
               }, 100);
               var audio = new Audio("wrong.mp3");
               audio.play();

    }
  }

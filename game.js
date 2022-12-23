var gamePattern = [];
var randomNumberArray = ["red", "blue", "green", "yellow"];
var userChosenPattern = [];
var level=0;
var started= false;

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+ level);
nextSequence();
started=true;
}
});

$(".btn").on("click", function() {
  var userChosenColor = $(this).attr("id");
  userChosenPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  userCurrentlevel=(userChosenPattern.length)-1
  checkAnswer(userCurrentlevel);
   })

function nextSequence() {
  userChosenPattern=[];
  level++;
  $("#level-title").text("Level "+ level);
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosencolor = randomNumberArray[randomNumber];
  gamePattern.push(randomChosencolor);
  $("#" + randomChosencolor).fadeOut(100).fadeIn(100);
  playSound(randomChosencolor);

}

function playSound(audio) {
  var audio = new Audio(audio + ".mp3");
  audio.play();
}

function animatePress(currentColor){
$("."+currentColor).addClass("pressed");
setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    }, 100);

}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userChosenPattern[currentLevel]){
    if(gamePattern.length===userChosenPattern.length){
      setTimeout(function(){
        nextSequence();},1000);

      }
    }
      else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over , Press Any Key to Restart");

        setTimeout(function(){
          $("body").removeClass("game-over")
        },200);
      startOver();
    }

  }


function startOver(){
  level= 0;
  gamePattern=[];
  started=false;
}

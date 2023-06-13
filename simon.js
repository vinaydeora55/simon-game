let buttonColours = ["red", "green", "blue", "yellow"];

let userArray = [];

let randomArray = [];

let started = false;

$(document).keypress(function() {
   if (!started) {
     setTimeout(() => {randomColorGenerator()}, 700);  
     started = true;
   }
 });


for (let index = 0; index < buttonColours.length; index++) {
      const element = buttonColours[index];
      document.getElementById(element).addEventListener("click",()=>{
         addToUser(element);   
         checkAnswer(userArray.length-1)      
      })
      
   }


function checkAnswer(indexValue){

   if(userArray[indexValue] === randomArray[indexValue]){
      if(userArray.length === randomArray.length){
         setTimeout(function () {
            nextSequence();
          }, 1000);
      }
   }else{
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      reStart()
   }

}

function nextSequence(){
   userArray = [];
   randomColorGenerator();
}

function randomColorGenerator (){
   let randomIndex = Math.floor(Math.random() * buttonColours.length);
   let randomColor = buttonColours[randomIndex]
   randomArray.push(randomColor);
   animatePress(randomColor);
   playSound(randomColor)

}

function addToUser(element){

   animatePress(element);
   playSound(element)
   userArray.push(element)
}

function animatePress(currentColor) {
   $("#" + currentColor).addClass("pressed");
   setTimeout(function () {
     $("#" + currentColor).removeClass("pressed");
   }, 100);
 }

 function playSound(name) {
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
 }
 
 function reStart() {

   userArray = [];
   randomArray = [];
   started = false;
 }
 


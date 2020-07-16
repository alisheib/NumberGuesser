/* GAME FUNCTION :
-Player must guess a number between a min and a max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the Player of the correct answer if lose
-Let the player choose to play again
*/

// Game Values 
let min = 1,
    max = 10,
    winningNum = getRandomNum(min , max),
    guessesLeft = 3;

// UI elements 
const game = document.querySelector("#game"),
      minNum =document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event Listener
game.addEventListener("mousedown" ,function(e){
    if(e.target.className === "play-again"){
        window.location.reload();
    }
    
})

// Listen for guess
guessBtn.addEventListener("click", function(){
     let guess =parseInt(guessInput.value);

     //Validate
     if(isNaN(guess) || guess < min || guess > max ){
         setMessage(`Please enter a number between  ${min} and ${max}` , "red");
     }

     // Check if Won
     if(guess === winningNum){
         // Game Over - Won
         gameOver(true ,`${winningNum} is correct, You Win!!`)

       
     } else {
         // Wrong number
         guessesLeft -= 1;
         if(guessesLeft === 0){
             // GameoVER - Lost
             gameOver(false , `Game Over, You Lost. The correct number was ${winningNum} `);
          

             
         }
         else {
             // Game Continues - answer Wrong

             // Change Border color 
             guessInput.style.borderColor = "red";

             // Clear Input
             guessInput.value =" ";
             //Tell User it is the wrong number
             setMessage(`${guess} is not correct, ${guessesLeft} guesses Left`, "red");

             //


         }

     }
    });

    // Game Over 
    function gameOver(won , msg){
        let color;
        won === true ? color ='green' : color = 'red';
         // Disable input
         guessInput.disabled = true;
         // Change border color
         guessInput.style.borderColor = color;        
         // Set Text Color
         message.style.color =color;
         // Set message to let user know they won
         setMessage(msg);

         // Play Again ?
         guessBtn.value ="play again ?"
         guessBtn.className += "play-again";
    }

// Get Winning Number
function getRandomNum(min , max){
    return Math.floor((Math.random() * (max-min+1)+min));


}

// Set message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;

}




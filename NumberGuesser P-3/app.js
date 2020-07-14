/* GAME FUNCTION :
-Player must guess a number between a min and a max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the currect answer if loose
-Let player choose to play again
*/ 

// Game values
let min =1,
    max =10,
    winningNum =getRandomNum(min ,max),
    guessesLeft =3;

// UI Elements
const game = document.querySelector("#game"),
      minNum =document.querySelector('.min-num'),
      maxNum =document.querySelector(".max-num"),
      guessBtn =document.querySelector("#guess-btn"),
      guessInput=document.querySelector("#guess-input"),
      message=document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event Listener
game.addEventListener("mousedown", function(e){
    if(e.target.className === "play-again"){
        window.location.reload();
    }
    

});

//Listen for guess
guessBtn.addEventListener("click",function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);


// Validate
if( isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
}

//Check if Won
if(guess === winningNum){
    gameOver(true ,`${winningNum} is correct, YOU WIN`)

} else {
    // Wrong Number
    guessesLeft -=1;
    if(guessesLeft === 0){
        //Game Over Lost
        gameOver(false ,`Game Over ,you Lost.The correct number was ${winningNum}`);

        

   
}else {
        //Game Continues - answer Wrong

        //Change border color
        guessInput.style.borderColor ="red";

        //Clear Input
        guessInput.value=" ";


        //Tell User it is the wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,"red");
    }
}

    




});

//Game Over
function gameOver(won, msg){
    let color;
    won === true ? color ="green" : color = "red";
    //Disable INput
    guessInput.disabled =true;

    //Change border color to green (won)
    guessInput.style.borderColor = color;

    //Set text Color
    message.style.color=color;

    // Set message to let know they won
    setMessage(msg);

    //Play Again ?
    guessBtn.value ="Play Again";
    guessBtn.className += "Play-again";
}


    





//Set message
function setMessage(msg ,color){
    message.style.color =color;
    message.textContent = msg;

}

//Get Winning Number
function getRandomNum(min ,max){
    return Math.floor(Math.random() * (max-min+1) +min);


}


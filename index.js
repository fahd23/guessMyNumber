'use strict';

const userInput = document.querySelector("#user-input");
const btnCheck = document.querySelector("#check");
const message = document.querySelector(".message");
const scoreMsg = document.querySelector(".score");
const highScoreMsg = document.querySelector(".highscore");
const btnPlayAgain = document.querySelector("#btn-again")

let randomNumber = Math.trunc(Math.random() * 10 + 1);
// console.log(randomNumber);

let score = 10;
let highScore = 0;

function clickHandler() {
    let userInputValue = Number(userInput.value);
    if (userInputValue === 0) {
        message.textContent = "βοΈ No Number";
    } else if (score > 1) {
        if (userInputValue === randomNumber) {
            message.textContent = 'π Correct';
            document.body.style.background = "#60b347";
            if (score > highScore) {
                highScore = score;
            }
            highScoreMsg.textContent = highScore;
        } else if (userInputValue !== randomNumber) {
            message.textContent = userInputValue > randomNumber ? "πTo high" : "πto Low";
            score--;
            document.body.style.background = "#EEEEEE";
            scoreMsg.textContent = score;
        }
    }else{
        message.innerText ="π€ You lost the game!";
        document.body.style.background = "#FF6B6B";
        scoreMsg.innerText = 0;
    }

}

function playAgain(){
    score =10;
    randomNumber = Math.trunc(Math.random() * 10 + 1);
    document.body.style.background = "#EEEEEE";
    scoreMsg.textContent = 10;
    message.textContent = "Start guessing...";
    userInput.value = "";
}



btnPlayAgain.addEventListener("click",playAgain)
btnCheck.addEventListener("click", clickHandler)
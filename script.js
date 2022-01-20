"use strict";

const guessNum = document.querySelector("#guess-num"); //select input field
const checkNum = document.querySelector("#check-num"); //select check button
const setMessage = document.querySelector("#message"); //select message element
const numEnter = document.querySelector("#num-enter"); //select showing number element
const scoreElement = document.querySelector("#score"); //select show score element
const highScoreElement = document.querySelector("#high-score"); //select highscore element
const resetBtn = document.querySelector("#reset"); //select reset button element

//setting message
const messageShort = (m) => (setMessage.textContent = m);

//generating random number
function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let rn = randomNumber();

//storing initial value of score & highsore
let score = 20;
let highScore = 0;

checkNum.addEventListener("click", function () {
  const guessValue = Number(guessNum.value);
  numEnter.textContent = "?";

  if (!guessValue) {
    setMessage.textContent = "⛔ No Number Entered!";
  } else if (guessValue === rn) {
    messageShort("Congrats 🎉! you've gussed it right.");
    setMessage.classList.add("msg-color");
    numEnter.classList.add("num-enter-bd");
    guessNum.setAttribute("disabled", "true");
    numEnter.textContent = guessValue;

    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
  } else if (guessValue !== rn) {
    if (score > 1) {
      if (guessValue > rn) {
        messageShort("Too High!");
      } else if (guessValue < rn) {
        messageShort("Too Low!");
      }
      score--;
      scoreElement.textContent = score;
    }
  } else {
    messageShort("You Lost the Game!");
    scoreElement.textContent = 0;
  }
});

resetBtn.onclick = function () {
  rn = randomNumber();
  console.log(rn);
  scoreElement.textContent = 20;
  score = 20;
  messageShort("Start Guessing...");
  numEnter.textContent = "??";
  guessNum.removeAttribute("disabled");
  setMessage.classList.remove("msg-color");
  numEnter.classList.remove("num-enter-bd");
  guessNum.value = "";
};

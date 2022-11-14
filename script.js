"use strict";
// variable declarations, drawing a number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// message show function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// a function for comparing a number to a drawn number
const GuessNumber = function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No number!");
  } else if (guess > 20) {
    displayMessage("Number must be under 20");
  } else if (guess === secretNumber) {
    // When the number was guessed
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "#ceffc9";
    document.querySelector(".guess").style.backgroundColor = "#a0ff96";

    // Assign new score to highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When the number is not guessed
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
};
// calling the function on the button and on enter
document.querySelector(".check").addEventListener("click", GuessNumber);
document.querySelector(".guess").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    GuessNumber();
  }
});

// new game function
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#fbeaeb";
  document.querySelector(".guess").style.backgroundColor = "#f8dadb";
  displayMessage("Start guessing!");
});

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--vh", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
appHeight();

"use strict";

let loNum = 0;
let hiNum = 100;
let computerGuessText = document.querySelector("h1");
document.querySelector("#tooLo").addEventListener("click", tooLo);
document.querySelector("#tooHi").addEventListener("click", tooHi);
let numberOfGuesses = 0;
let computerGuess;

function computerGuesses() {
  numberOfGuesses++;
  computerGuess = Math.round (loNum + (hiNum - loNum) / 2);
  computerGuessText.textContent = computerGuess;
  console.log("numberOfGuesses", numberOfGuesses);
  return computerGuess;
}

function tooLo() {
  console.log("Low");
  loNum = computerGuesses();
  computerGuessText.textContent = loNum;
}

function tooHi() {
  console.log("High");
  hiNum = computerGuesses();
  computerGuessText.textContent = hiNum;
}

function tooLoOrHi(evt) {
    console.log(evt.target.id);
    if (evt.target.id === "tooLo"){
        loNum = computerGuess;
    }
    else {
        hiNum = computerGuess;
    }; 
}
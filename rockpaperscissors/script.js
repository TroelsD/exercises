"use strict";

let userChoice;
let makeComputerChoice;
let result;

document.querySelector(".rock").addEventListener("click", clickRock);
document.querySelector(".paper").addEventListener("click", clickPaper);
document.querySelector(".scissors").addEventListener("click", clickScissors);

function clickRock() {
    userChoice = "rock";
    computerChoice();
   // console.log("Rock");
}

function clickPaper() {
    userChoice = "paper";
    computerChoice();
   // console.log("Paper");
}

function clickScissors() {
    userChoice = "scissors";
    computerChoice();
    //console.log("Scissors");
}

function computerChoice() {
    console.log("compChoice", userChoice); 
    computerChoice = "rock";
determineWinner();
}

function determineWinner() {
result = "win";
startHandAnimation();
}

function startHandAnimation() {
document.querySelector("#player1").addEventListener("animationend,handAnimationEnd").classList.add("shake");
document.querySelector("#player2").classList.add("shake");
}

function handAnimationEnd() {
    console.log("Animation ended"); 

}


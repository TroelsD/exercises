function getComputerMove() {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
  }
  
  function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
      return 'draw';
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      return "win";
    } else {
      return "lose";
    }
  }
  
  function updateGameStatus(result) {
    const loseElement = document.getElementById("lose");
    const winElement = document.getElementById("win");
    const drawElement = document.getElementById("draw");
  
    loseElement.classList.add("hidden");
    winElement.classList.add("hidden");
    drawElement.classList.add("hidden");
  
    if (result === "lose") {
      loseElement.classList.remove("hidden");
    } else if (result === "win") {
      winElement.classList.remove("hidden");
    } else {
      drawElement.classList.remove("hidden");
    }
  }
  
  function updateHands(result) {
    const player1Element = document.getElementById("player1");
    const player2Element = document.getElementById("player2");
  
    player1Element.classList.remove("rock", "paper", "scissors", "shake");
    player2Element.classList.remove("rock", "paper", "scissors", "shake");
  
    if (result === "rock") {
      player1Element.classList.add("rock");
    } else if (result === "paper") {
      player1Element.classList.add("paper");
    } else if (result === "scissors") {
      player1Element.classList.add("scissors");
    }
  
    setTimeout(() => {
      player1Element.classList.remove("shake");
    }, 1600);
  
    player2Element.classList.add("shake");
  }
  
  function playGame(playerMove) {
    const computerMove = getComputerMove();
    const result = determineWinner(playerMove, computerMove);
  
    updateHands(playerMove);
  
    updateGameStatus(result);
  }
  
  document.querySelector(".rock").addEventListener("click", function() {
    playGame("rock")
  });
  
  document.querySelector(".paper").addEventListener("click", function() {
    playGame("paper");
  });
  
  document.querySelector(".scissors").addEventListener("click", function() {
    playGame("scissors");
  });


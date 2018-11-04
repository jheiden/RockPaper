
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function startGame () {
for (i = 1; i < 6; i++) {
  console.log("Round" + " " + i)
  playRound();
}
}
/* NOTE TO SELF:
Can't do call to function before declaring variables. 
Since they then would be undefined during runtime. */

function playRound() {
  playerSelection = prompt();
  computerSelection = computerPlay();
  if (playerSelection.trim() === computerSelection.trim()) {
  console.log("Round is equal" + " " + "Player has chosen" + " " + playerSelection + "\n" + "Computer has chosen" + " " + computerSelection);

  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
  playerScore += 1;
  console.log("Player has chosen" + " " + playerSelection + "\n" +
  "Computer has chosen" + " " + computerSelection);

  } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
  computerScore += 1;
  console.log("Player has chosen" + " " + playerSelection + "\n" +
  "Computer has chosen" + " " + computerSelection);
  
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
  playerScore += 1;
 console.log("Player has chosen" + " " + playerSelection + "\n" +
 "Computer has chosen" + " " + computerSelection);

  } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
  computerScore += 1;
  console.log("Player has chosen" + " " + playerSelection + "\n" +
  "Computer has chosen" + " " + computerSelection);
 
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
  playerScore += 1;
  console.log("Player has chosen" + " " + playerSelection + "\n" +
  "Computer has chosen" + " " + computerSelection);

  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
  computerScore += 1;
  console.log("Player has chosen" + " " + playerSelection + "\n" +
  "Computer has chosen" + " " + computerSelection);
  }
}

function computerPlay () {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch(randomNumber) {
    case 1:
        randomNumber = "Rock";
        return randomNumber;
    case 2:
        randomNumber = "Scissor";
        return randomNumber;
    case 3:
        randomNumber = "Paper"
        return randomNumber;
  }   
}

startGame();
console.log("Final Score is:" + "\n" + "Computer = " + computerScore + "\n" 
+ "Player = " + playerScore); // Prints endscore






const compChoice = document.getElementById('computer-choice');
const yourChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const playButton = document.getElementById('play');
const choices = document.getElementsByName('choice');
const resultContainer = document.querySelector('.result-container'); // Get the result container
const possibleChoices = ['rock', 'paper', 'scissors'];

let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function game() {
  playButton.addEventListener('click', (e) => {
    const selected = Array.from(choices).filter((b) => b.checked);
    if (selected.length === 0) {
      alert("Please select a choice!");
      return;
    }
    const playerSelection = selected[0].value;
    const computerSelection = getComputerChoice();

    addTextToSpan(yourChoice, playerSelection);
    addTextToSpan(compChoice, computerSelection);

    const result = playRound(playerSelection, computerSelection);
    addTextToSpan(resultDisplay, result);

    if (result === "You win!") {
      scorePlayer++;
    } else if (result === "You lose!") {
      scoreComputer++;
    }

    addTextToSpan(scoreDisplay, `You: ${scorePlayer}, Computer: ${scoreComputer}`);
    resultContainer.style.display = 'block'; // Show the result container
  });
}

function addTextToSpan(span, text) {
  span.textContent = text;
}

game();

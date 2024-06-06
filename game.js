const compChoice = document.getElementById('computer-choice');
const yourChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const playButton = document.getElementById('play');
const choices = document.getElementsByName('choice');
const resultContainer = document.querySelector('.result-container');
const loadingSpinner = document.getElementById('loading-spinner');
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

    loadingSpinner.style.display = 'block';
    resultContainer.style.display = 'none';

    setTimeout(() => {
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

      loadingSpinner.style.display = 'none';
      resultContainer.style.display = 'block';
    }, 2000); // Delay for 2 seconds to show the loading spinner
  });
}

function addTextToSpan(span, text) {
  span.textContent = text;
}

game();

const compChoice = document.getElementById('computer-choice');
const yourChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const playButton = document.getElementById('play');
const choices = document.getElementsByName('choice');
const resultContainer = document.getElementById('result-container');
const loadingResult = document.getElementById('loading-result');
const initialLoader = document.getElementById('initial-loader');
const mainContent = document.getElementById('main-content');
const progressBar = document.getElementById('progress');
const resultSpinner = document.getElementById('result-spinner');
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
  playButton.addEventListener('click', () => {
    const selected = Array.from(choices).filter((b) => b.checked);
    if (selected.length === 0) {
      alert("Please select a choice!");
      return;
    }
    const playerSelection = selected[0].value;
    const computerSelection = getComputerChoice();

    loadingResult.style.display = 'block';
    resultContainer.style.display = 'none';
    resultSpinner.style.display = 'block';

    setTimeout(() => {
      resultSpinner.style.display = 'none';
      loadingResult.style.display = 'none';
      resultContainer.style.display = 'block';

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
    }, 2000); // Simulating a delay for the result
  });
}

function addTextToSpan(span, text) {
  span.textContent = text;
}

function showInitialLoader() {
  let width = 0;
  const interval = setInterval(() => {
    width += 40;
    progressBar.style.width = width + '%';
    if (width >= 225) {
      clearInterval(interval);
      initialLoader.style.display = 'none';
      mainContent.style.display = 'block';
    }
  }, 500);
}

showInitialLoader();
game();

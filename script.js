let playerScore = 0;
let computerScore = 0;
let playerSelection;
const buttons = document.querySelectorAll('.buttons');
const play = document.querySelector('#play');
const resultsDiv = document.querySelector('#results');
const playerCounter = document.createElement('h3');
const computerCounter = document.createElement('h3');
const playerChoice = document.createElement('p');
const computerChoice = document.createElement('p');
const roundResult = document.createElement('p');

function getComputerChoice() {
    const randomChoice = Math.random();
    if (randomChoice <= 0.33) {
        return 'rock';
    } else if (randomChoice <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound() {
    let computerSelection = getComputerChoice();
    computerChoice.textContent = `Computer selected: ${computerSelection}`;
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors';   
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You Win! Scissors beats Paper';
    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You Win! Paper beats Rock';
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock';
    }else {
        return 'Tie!';
    }
}

buttons.forEach((button) => { button.addEventListener('click', () => {
    playerSelection = button.id;
    game();
    })
})

function game() {
    roundResult.textContent = playRound();

    playerCounter.textContent = `Player: ${playerScore}`;
    resultsDiv.appendChild(playerCounter);

    computerCounter.textContent = `Computer: ${computerScore}`;
    resultsDiv.appendChild(computerCounter);

    playerChoice.textContent = `You selected: ${playerSelection}`; 
    resultsDiv.appendChild(playerChoice);

    resultsDiv.appendChild(computerChoice);

    resultsDiv.appendChild(roundResult);

    if (playerScore === 5) {
        play.textContent = 'YOU WIN!';
        playerScore = 0;
        computerScore = 0;
        playerChoice.textContent = '';
        computerChoice.textContent = '';
        roundResult.textContent = '';
        playerCounter.textContent = `Player: ${playerScore}`;
        computerCounter.textContent = `Computer: ${computerScore}`;
    } else if (computerScore === 5) {
        play.textContent = 'YOU LOSE!';
        playerScore = 0;
        computerScore = 0;
        playerChoice.textContent = '';
        computerChoice.textContent = '';
        roundResult.textContent = '';
        playerCounter.textContent = `Player: ${playerScore}`;
        computerCounter.textContent = `Computer: ${computerScore}`;
    }
}
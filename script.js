let playerScore = 0
let computerScore = 0 

function getComputerChoice(){
    const randomChoice = Math.random()
    if(randomChoice <= 0.33){
        return 'rock'
    }else if(randomChoice <= 0.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        return 'You Win! Rock beats Scissors'   
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return 'You Win! Scissors beats Paper'
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return 'You Win! Paper beats Rock'
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++
        return 'You Lose! Rock beats Scissors'
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++
        return 'You Lose! Scissors beats Paper'
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++
        return 'You Lose! Paper beats Rock'
    }else{
        return 'Tie!'
    }
}

function game(){
    for(i = 0; i < 5; i++){
        const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(`Player: ${playerSelection} VS Computer: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection))
        console.log(`Player ${playerScore} VS Computer ${computerScore}`)
    }
    if(playerScore > computerScore){
        console.log('You win!')
    }else{
        console.log('You lose!')
    } 
}

game()
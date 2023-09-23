// Random int starting from zero
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// Get random choice from RNG
function getComputerChoice() {
    // Get a number from a choice of 3
    let choice = getRandomInt(3);
    // Map random number to a choice
    switch (choice) {
        case 0:
            return("rock")
            break;
        case 1:
            return("paper")
            break;
        case 2:
            return("scissors")
            break;
    }
}

    // Evaluate each winning case based on perspective
function playRound(playerSelection, computerSelection) {
    roundCount++;
    switch (true) {
        // Computer wins
        case computerSelection == "rock" && playerSelection == 'scissors':
        case computerSelection == "paper" && playerSelection == 'rock':
        case computerSelection == "scissors" && playerSelection == 'paper':
            computerWins++;
            return(`You lose, ${computerSelection} beats ${playerSelection}.`)
            break;
        // Player wins
        case playerSelection == "scissors" && computerSelection == 'paper':
        case playerSelection == "paper" && computerSelection == 'rock':
        case playerSelection == "rock" && computerSelection == 'scissors':
            playerWins++;
            return("You win the round!")
            break;
        // Tie Case
        case playerSelection == computerSelection:
            return('Tie')
            break;
        default:
            return("Please enter a valid input")
            break;
    }
}

// Set a round count that goes up after each playround
// When round count is 5, calculate the winner
let roundCount = 0;
let computerWins = 0;
let playerWins = 0;
let displayText = document.getElementsByClassName('display')[0];
let scoreboard = document.getElementsByClassName('scoreboard')[0];

function resetGame() {
    roundCount = 0;
    computerWins = 0;
    playerWins = 0;
    displayText.innerHTML = "Choose.";
    scoreboard.innerHTML = "0-0";
    document.getElementsByClassName('rock')[0].setAttribute('onclick', 'playRock()');
    document.getElementsByClassName('scissors')[0].setAttribute('onclick', 'playScissors()');
    document.getElementsByClassName('paper')[0].setAttribute('onclick', 'playPaper()');
}

function updateScoreBoard() {
    scoreboard.innerHTML = `${playerWins}-${computerWins}`;
    
    // Check for a winner
    if(roundCount == 5) {
        if (playerWins > computerWins) {
            displayText.innerHTML = "You won the game!";
        }
        else {
            displayText.innerHTML = "You lost the game!";
        }
        lockGame();
    }
}

function playRock() {
    displayText.innerHTML = playRound("rock", getComputerChoice());
    updateScoreBoard();
}

function playPaper() {
    displayText.innerHTML = playRound("paper", getComputerChoice());
    updateScoreBoard();
}

function playScissors() {
    displayText.innerHTML = playRound("scissors", getComputerChoice());
    updateScoreBoard();
}

function lockGame() {
    document.getElementsByClassName('rock')[0].onclick = "";
    document.getElementsByClassName('scissors')[0].onclick = "";
    document.getElementsByClassName('paper')[0].onclick = "";
}
// What if we turned RPS into fumos
// Choices include cirno tewi and reisen lmao
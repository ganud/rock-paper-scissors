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
// Image links
const rockImage = "https://i.imgur.com/ImuMQw8.png";
const paperImage = "https://cdn-icons-png.flaticon.com/128/9396/9396667.png";
const scissorsImage = "https://cdn-icons-png.flaticon.com/128/639/639219.png";


function resetGame() {
    roundCount = 0;
    computerWins = 0;
    playerWins = 0;
    displayText.innerHTML = "Choose.";
    scoreboard.innerHTML = "0-0";
    // Add back the onclicks that may be removed by lockGame
    document.getElementsByClassName('rock')[0].setAttribute('onclick', 'playRock()');
    document.getElementsByClassName('scissors')[0].setAttribute('onclick', 'playScissors()');
    document.getElementsByClassName('paper')[0].setAttribute('onclick', 'playPaper()');
}

function updateScoreBoard() {
    scoreboard.innerHTML = `${playerWins}-${computerWins}`;
    
    // Check for a winner
    if(roundCount == 5) {
        if (playerWins > computerWins) {
            displayText.innerHTML = "You proved your superiority over the fumo.";
        }
        else if (playerWins < computerWins) {
            displayText.innerHTML = "You were bested by a fumo, how unfortunate.";
        }
        else {
            displayText.innerHTML = "You intellect is on par with the fumo.";
        }
        lockGame();
    }
}

function playRock() {
    let computerChoice = getComputerChoice();
    updateChoiceDisplay('rock', computerChoice);
    displayText.innerHTML = playRound("rock", computerChoice);
    updateScoreBoard();
}

function playPaper() {
    let computerChoice = getComputerChoice();
    updateChoiceDisplay('paper', computerChoice);
    displayText.innerHTML = playRound("paper", computerChoice);
    updateScoreBoard();
}

function playScissors() {
    let computerChoice = getComputerChoice();
    updateChoiceDisplay('scissors', computerChoice);
    displayText.innerHTML = playRound("scissors", computerChoice);
    updateScoreBoard();
}

function lockGame() {
    // Remove onclick to prevent further user input
    document.getElementsByClassName('rock')[0].onclick = "";
    document.getElementsByClassName('scissors')[0].onclick = "";
    document.getElementsByClassName('paper')[0].onclick = "";
}

function updateChoiceDisplay(player1choice, player2choice) {
    player1choiceImage = document.getElementById("choice-player1");
    player2choiceImage = document.getElementById("choice-player2");
    switch (player1choice) {
        case 'rock':
            player1choiceImage.src = rockImage;
            break;
        case 'paper':
            player1choiceImage.src = paperImage;
            break;
        case 'scissors':
            player1choiceImage.src = scissorsImage;
    }
    switch (player2choice) {
        case 'rock':
            player2choiceImage.src = rockImage;
            break;
        case 'paper':
            player2choiceImage.src = paperImage;
            break;
        case 'scissors':
            player2choiceImage.src = scissorsImage;
    }
}

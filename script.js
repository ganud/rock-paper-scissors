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
    switch (true) {
        // Computer wins
        case computerSelection == "rock" && playerSelection == 'scissors':
        case computerSelection == "paper" && playerSelection == 'rock':
        case computerSelection == "scissors" && playerSelection == 'paper':
            return(`You lose, ${computerSelection} beats ${playerSelection}.`)
            break;
        // Player wins
        case playerSelection == "scissors" && computerSelection == 'paper':
        case playerSelection == "paper" && computerSelection == 'rock':
        case playerSelection == "rock" && computerSelection == 'scissors':
            return("You win!")
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


// Initialize player_wins and computer_wins variable
// Add event listener to all buttons
// Increment the side that wins when returned the corresponding vallue
// If one variable reaches 5 declare that the winner
let player_wins = 0;
let computer_wins = 0;
let outcome = document.querySelector('div')
let choices = document.querySelectorAll("button");

choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        let userChoice = choice.textContent.toLowerCase();
        userChoice = String(userChoice);
        result = playRound(userChoice, getComputerChoice())
        outcome.textContent = result;
    })
} );

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

function update_scores(result) {
    if(result == "You win!") {
        player_wins++;
        player_score.textContent = "You: " + player_wins;
    }
    else if(result.includes("You lose")) {
        computer_wins++;
        computer_score.textContent = "Computer: " + computer_wins;
    }

    if(player_wins == 5) {
        verdict.textContent = "You won the match!";
    }
    else if (computer_wins == 5) {
        verdict.textContent = "You lost the match!";
    }
}

// What if we turned RPS into fumos
// Choices include cirno tewi and reisen lmao
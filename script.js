// Random int starting from zero
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


// Get random choice from RNG
function getComputerChoice() {
    // Get a number from a choice of 3
    choice = getRandomInt(3);
    // Map random number to a choice using if statements
    if (choice == 0) {
        return("rock")
    }
    else if (choice == 1) {
        return("paper")
    }
    else if (choice == 2) {
        return("scissors")
    }
}


    // Evaluate each winning case based on perspective
function playRound(playerSelection, computerSelection) {
    // sterilize inputs 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
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
        case playerSelection == computerSelection:
            return('Tie')
            break;
        default:
            return("Please enter a valid input")
            break;
    }
}

function game() {
    for(var word = ''; word.length < 5; word += 'a'){
        console.log(word)
    }
}
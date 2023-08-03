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
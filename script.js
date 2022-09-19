
// getComputerChoice: 
  // 1. create variable computerChoice that equals the output of getComputerChoice() 
function getComputerChoice() {
  const computerSelections = ['Rock', 'Paper', 'Scissors'];
  let random = Math.floor(Math.random()*(2-0+1)+0);
  return computerSelections[random];
}
  // 2. Randomly return either 'Rock', 'Paper', or 'Scissors'
 let computerChoice = getComputerChoice();

// getPlayerChoice:
  // Takes input from player (must be either 'Rock', 'Paper', or 'Scissors')
  // Must be case insensitive

// playRound:
  // Takes two parameters: computerChoice and playerChoice
  // Conditional statements. 
    // `You lose! ${} beats ${}!`
    // `You win! ${} beats ${}!`
  // Return results, do not console.log them.

  // game() function = 5 rounds.
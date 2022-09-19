
// getComputerChoice: 
  // 1. create function getComputerChoice to randomly return either 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {
  const computerSelections = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random()*(2-0+1)+0);
  return computerSelections[random];
}
  // 2. Assign returned value of getComputerChoice() to variable computerChoice.

  // getPlayerChoice:
let playerChoice = 'rock';

// playRound:
  // Takes two parameters: computerChoice and playerChoice
  // Conditional statements. 
    // `You lose! ${} beats ${}!`
    // `You win! ${} beats ${}!`
  // Return results, do not console.log them.
function playRound(computerChoice, playerChoice) {
  playerChoice = prompt('Rock, Paper, Scissors, Shoot!', playerChoice);
  computerChoice = getComputerChoice();

  let youWin = `You win! ${playerChoice} beats ${computerChoice}.`;
  let youLose = `You lose! ${computerChoice} beats ${playerChoice}`;
  let tie = 'It\'s a tie! Play again!'

  // Must be case insensitive
  if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    return youWin;
  } else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    return youWin;
  } else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    return youWin;
  } else if (playerChoice.toLowerCase() === computerChoice) {
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    return tie;
  } else if (playerChoice.toLowerCase() !== 'rock' || playerChoice.toLowerCase() !== 'paper' || playerChoice.toLowerCase() !== 'scissors')  {
    return 'You must select "rock", "paper", or "scissors"';
  } else return youLose;
}



  // game() function = 5 rounds.
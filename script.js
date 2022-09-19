
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
let computerChoice;
let roundsWon = 0;
let roundsLost = 0;
// playRound:
  // Takes two parameters: computerChoice and playerChoice
  // Conditional statements. 
    // `You lose! ${} beats ${}!`
    // `You win! ${} beats ${}!`
  // Return results, do not console.log them.
function playRound(playerChoice, computerChoice) {

  playerChoice = prompt('Rock, Paper, Scissors, Shoot!', playerChoice);
  computerChoice = getComputerChoice();

  let youWin = `You win! ${playerChoice} beats ${computerChoice}.`;
  let youLose = `You lose! ${computerChoice} beats ${playerChoice}`;
  let tie = 'It\'s a tie! Play again!'

  // Must be case insensitive
  if (playerChoice.toLowerCase() == 'rock' && computerChoice == 'scissors') {
    roundsWon = ++roundsWon;
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(youWin);
    } else if (playerChoice.toLowerCase() == 'scissors' && computerChoice == 'paper') {
    roundsWon = ++roundsWon;
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(youWin);
  } else if (playerChoice.toLowerCase() == 'paper' && computerChoice == 'rock') {
    roundsWon = ++roundsWon;
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(youWin);
  } else if (playerChoice.toLowerCase() == computerChoice) {
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(tie);
  } else if (playerChoice.toLowerCase() !== 'rock' && playerChoice.toLowerCase() !== 'paper' && playerChoice.toLowerCase() !== 'scissors' || playerChoice.toLowerCase() == null) {
    console.log('You must select "rock", "paper", or "scissors"');
  } 
  else {
    roundsLost = ++roundsLost;
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(youLose);
  }
}

// game() function = 5 rounds.
  // use a for loop where i = number of rounds.
  // count roundsWon and roundsLost. Print winning or losing message to the console depending on the outcome.
function game() {
  for (i = 1; i < 6; i++) {
    playRound()
    console.log(`Round ${i} out of 5!`);
  }
  if (roundsWon > roundsLost) {
    console.log('Congratulations! You\'ve won!');
  } else if (roundsWon == roundsLost) {
    console.log('It\'s a tie! Out of five. I guess.');
  } else console.log('Better luck next time!');
}

game();
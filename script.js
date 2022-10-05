// begin to count scores.
let roundsWon = 0;
let roundsLost = 0;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const scores = document.querySelector('.scores');
const results = document.querySelector('.results');

// add event listener to each button, run playRound() on each click.
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function () {
  playRound(button.className, getComputerChoice())
}))

//  randomly return either 'rock', 'paper', or 'scissors'
function getComputerChoice() {
  const computerSelections = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random()*(2-0+1)+0);
  return computerSelections[random];
}

function playRound(playerChoice, computerChoice) {
  // winning/losing messages
  const youWin = `You win! ${capitalizeFirstLetter(playerChoice)} beats ${computerChoice}.`;
  const youLose = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${playerChoice}.`;
  const tie = 'It\'s a tie! Play again!'

  if (
    (playerChoice == 'rock' && computerChoice == 'scissors') 
    || (playerChoice == 'scissors' && computerChoice == 'paper') 
    || (playerChoice == 'paper' && computerChoice == 'rock')) {
      // increase Player Score
    roundsWon = ++roundsWon;
    results.textContent = youWin;
    } 
   else if (playerChoice == computerChoice) {
    results.textContent = tie;
  } else {
    roundsLost = ++roundsLost;
    results.textContent = youLose;
  }

  if (roundsWon >= 5) {
    scores.textContent = `YOU WIN! Refresh the page to try again! Player Score: ${roundsWon}. Computer Score: ${roundsLost}`;
  } else if (roundsLost >= 5) {
    scores.textContent = `Better luck next time! Refresh the page to try again! Player Score: ${roundsWon}. Computer Score: ${roundsLost}`;
  } else scores.textContent = `Player Score: ${roundsWon}. Computer Score: ${roundsLost}`;
}

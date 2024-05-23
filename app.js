const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOISE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

// Promt for user to enter his choise
const getPlayerChoise = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER}, or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOISE} for you!`);
    return DEFAULT_USER_CHOISE;
  }
  return selection;
};

// Computers choise
const getComuterChoise = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// And the winner is
const getWinner = (cChoise, pChoise) => {
  if (cChoise === pChoise) {
    return RESULT_DRAW;
  } else if (
    (cChoise === ROCK && pChoise === PAPER) ||
    (cChoise == PAPER && pChoise === SCISSORS) ||
    (cChoise === SCISSORS && pChoise === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = false;
  console.log('Game is starting');
  const playerChoise = getPlayerChoise();
  const computerChoise = getComuterChoise();
  const winner = getWinner(computerChoise, playerChoise);
  console.log(winner);
});

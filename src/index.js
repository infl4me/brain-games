import readlineSync from 'readline-sync';
import { welcomeMessage, getName } from './gameEngine';
import runBrainEven from './games/even';
import runBrainCalc from './games/calc';
import runBrainGcd from './games/gcd';
import runBrainProgression from './games/progression';
import runBrainPrime from './games/prime';

const gameList = ['1. brain-even', '2. brain-calc', '3. brain-gcd', '4. brain-progression', '5. brain-prime'];
const games = [null, runBrainEven, runBrainCalc, runBrainGcd, runBrainProgression, runBrainPrime];

const runGameSelection = (userNameFromMenu) => {
  console.log('\nHere is a list of the games:\n');
  console.log(gameList.join('\n'));

  const userChosenGame = readlineSync.question('\nType a number of the game you want to play or "exit" to quit: \n');
  if (games[userChosenGame]) {
    games[userChosenGame](userNameFromMenu);
  } else if (userChosenGame === 'exit') {
    return;
  } else {
    console.log('Number not found.\n');
  }

  runGameSelection(userNameFromMenu);
};

export default () => {
  console.log(`${welcomeMessage}\n`);

  const userNameFromMenu = getName();
  console.log(`Hello, ${userNameFromMenu}!`);

  runGameSelection(userNameFromMenu);
};

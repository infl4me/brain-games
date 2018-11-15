import { cons } from 'hexlet-pairs';
import makeGame from '../gameEngine';
import getRandomInteger from '../tools';

const description = 'What number is missing in the progression';

const generateGameData = () => {
  let progression = '';
  const firstTerm = getRandomInteger(15);
  const progressionDifference = getRandomInteger(5, 2);
  const progressionLength = 10;
  const hiddenTerm = getRandomInteger(9, 0);
  let currentTerm = firstTerm;
  let rightAnswer = 0;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenTerm) {
      rightAnswer = String(currentTerm);
      progression += '.. ';
    } else if (i === progressionLength - 1) {
      progression += `${currentTerm}`;
    } else {
      progression += `${currentTerm} `;
    }
    currentTerm += progressionDifference;
  }
  const question = progression;

  return cons(question, rightAnswer);
};

export default () => makeGame(description, generateGameData);

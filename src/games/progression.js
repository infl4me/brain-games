import { cons } from 'hexlet-pairs';
import makeGame from '../gameEngine';
import getRandomInteger from '../tools';

const description = 'What number is missing in the progression';

const generateGameData = () => {
  let progression = '';
  const firstTerm = getRandomInteger(15);
  const progressionStep = getRandomInteger(5, 2);
  const progressionLength = 10;
  const hiddenElement = getRandomInteger(9, 0);
  let currentValue = firstTerm;
  let rightAnswer = 0;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenElement) {
      rightAnswer = String(currentValue);
      progression += '.. ';
    } else if (i === progressionLength - 1) {
      progression += `${currentValue}`;
    } else {
      progression += `${currentValue} `;
    }
    currentValue += progressionStep;
  }
  const question = progression;

  return cons(question, rightAnswer);
};

export default () => makeGame(description, generateGameData);

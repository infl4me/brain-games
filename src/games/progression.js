import { cons } from 'hexlet-pairs';
import makeGame from '../gameEngine';
import getRandomInteger from '../tools';

const description = 'What number is missing in the progression';

const progressionLength = 10;

const generateGameData = () => {
  let progression = '';
  const firstTerm = getRandomInteger(15);
  const progressionStep = getRandomInteger(5, 2);
  const hiddenIndex = getRandomInteger(progressionLength - 1, 0);

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenIndex) {
      progression += '.. ';
    } else {
      progression += `${firstTerm + progressionStep * i} `;
    }
  }

  const question = progression;
  const rightAnswer = firstTerm + progressionStep * hiddenIndex;

  return cons(question, String(rightAnswer));
};

export default () => makeGame(description, generateGameData);

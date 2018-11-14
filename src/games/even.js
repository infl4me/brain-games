import { cons } from 'hexlet-pairs';
import makeGame from '../gameEngine';
import getRandomInteger from '../tools';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const makePair = () => {
  const question = getRandomInteger();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export default () => makeGame(description, makePair);

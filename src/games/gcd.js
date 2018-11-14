import { cons } from 'hexlet-pairs';
import makeGame from '../gameEngine';
import getRandomInteger from '../tools';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const makePair = () => {
  const number1 = getRandomInteger(10);
  const number2 = getRandomInteger(10);

  const question = `${number1} ${number2}`;
  const rightAnswer = getGcd(number1, number2);

  return cons(question, String(rightAnswer));
};

export default () => makeGame(description, makePair);
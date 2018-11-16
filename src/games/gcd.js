import { cons } from 'hexlet-pairs';
import makeGame from '../gameEngine';
import getRandomInteger from '../tools';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const generateGameData = () => {
  const number1 = getRandomInteger();
  const number2 = getRandomInteger();

  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);

  return cons(question, String(answer));
};

export default userNameFromMenu => makeGame(description, generateGameData, userNameFromMenu);

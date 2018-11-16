import { cons } from 'hexlet-pairs';
import makeGame from '../gameEngine';
import getRandomInteger from '../tools';

const isPrime = (number, divisor = Math.floor(number / 2)) => {
  if (divisor === 1) return true;

  return (number % divisor === 0 || number < 2) ? false : isPrime(number, divisor - 1);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const question = getRandomInteger(100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default userNameFromMenu => makeGame(description, generateGameData, userNameFromMenu);

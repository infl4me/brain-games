import { cons } from 'hexlet-pairs';
import makeGame from '../gameEngine';
import getRandomInteger from '../tools';

const isPrime = (num) => {
  if (num < 2) return false;

  const iter = (counter) => {
    if (counter > num / 2) {
      return true;
    }
    if (num % counter === 0) {
      return false;
    }

    return iter(counter + 1);
  };

  return iter(2);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const question = getRandomInteger(100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default userNameFromMenu => makeGame(description, generateGameData, userNameFromMenu);

import { cons } from 'hexlet-pairs';
import makeGame from '../gameEngine';
import getRandomInteger from '../tools';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const generateGameData = () => {
  const question = getRandomInteger();
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default userNameFromMenu => makeGame(description, generateGameData, userNameFromMenu);

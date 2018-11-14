import { cons } from 'hexlet-pairs';
import makeGame from '../lib/gameEngine';
import { getRandomInteger, isEven } from '../lib/tools';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const makePair = () => {
  const question = getRandomInteger();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export default () => makeGame(rules, makePair);

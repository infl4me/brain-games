import { cons } from 'hexlet-pairs';
import { getRandomInteger } from '../lib/tools';
import makeGame from '../lib/gameEngine';

const rules = 'What is the result of the expression?';

const makeExpression = () => {
  const operand1 = getRandomInteger(10);
  const operand2 = getRandomInteger(10);
  let result = 0;
  let operation = getRandomInteger(3);

  if (operation === 1) {
    operation = '+';
  } else if (operation === 2) {
    operation = '-';
  } else if (operation === 3) {
    operation = '*';
  }

  if (operation === '+') {
    result = operand1 + operand2;
  } else if (operation === '-') {
    result = operand1 - operand2;
  } else if (operation === '*') {
    result = operand1 * operand2;
  }

  return cons(`${operand1} ${operation} ${operand2}`, String(result));
};

export default () => makeGame(rules, makeExpression);

import { cons } from 'hexlet-pairs';
import getRandomInteger from '../tools';
import makeGame from '../gameEngine';

const description = 'What is the result of the expression?';

const makeExpression = () => {
  const operand1 = getRandomInteger(10);
  const operand2 = getRandomInteger(10);
  let result = 0;
  let operation = getRandomInteger(3);

  switch (operation) {
    case 1:
      operation = '+';
      result = operand1 + operand2;
      break;
    case 2:
      operation = '-';
      result = operand1 - operand2;
      break;
    case 3:
      operation = '*';
      result = operand1 * operand2;
      break;
    default:
  }

  return cons(`${operand1} ${operation} ${operand2}`, String(result));
};

export default () => makeGame(description, makeExpression);

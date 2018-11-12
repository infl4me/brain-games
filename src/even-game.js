import readlineSync from 'readline-sync';
import { welcomeMessage, getName } from '.';

const isEven = num => num % 2 === 0;

const getRandomInteger = () => {
  const min = 1;
  const max = 100;
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => {
  console.log(welcomeMessage);
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const name = getName();
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInteger();
    console.log(`Question: ${number}`);

    const rightAnswer = isEven(number) ? 'yes' : 'no';
    const answer = getAnswer();
    const isAnswerCorrect = rightAnswer === answer;
    if (isAnswerCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

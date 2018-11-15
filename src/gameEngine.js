import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getName = () => readlineSync.question('May I have your name? ');

export const welcomeMessage = 'Welcome to the Brain Games!';

const getAnswer = () => readlineSync.question('Your answer: ');

const numberOfQuestions = 3;

const getQuestion = pair => car(pair);
const getRightAnswer = pair => cdr(pair);

export default (description, generateGameData) => {
  console.log(welcomeMessage);
  console.log(`${description}\n`);

  const name = getName();
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const gameData = generateGameData();
    const question = getQuestion(gameData);
    console.log(`Question: ${question}`);

    const answer = getAnswer();
    const rightAnswer = getRightAnswer(gameData);
    const isAnswerCorrect = answer === rightAnswer;
    if (isAnswerCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

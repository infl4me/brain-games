import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getName = () => readlineSync.question('May I have your name? ');

export const welcomeMessage = 'Welcome to the Brain Games!';

const getUserAnswer = () => readlineSync.question('Your answer: ');

const numberOfQuestions = 3;

const getQuestion = pair => car(pair);
const getAnswer = pair => cdr(pair);

export default (description, generateGameData, userNameFromMenu) => {
  if (!userNameFromMenu) console.log(welcomeMessage);
  console.log(`\n${description}\n`);
  const name = userNameFromMenu || getName();
  if (!userNameFromMenu) console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const gameData = generateGameData();
    const question = getQuestion(gameData);
    console.log(`Question: ${question}`);

    const userAnswer = getUserAnswer();
    const answer = getAnswer(gameData);
    const isAnswerCorrect = userAnswer === answer;
    if (isAnswerCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

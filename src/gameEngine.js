import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getName = () => readlineSync.question('May I have your name? ');

export const welcomeMessage = 'Welcome to the Brain Games!';

const getUserAnswer = () => readlineSync.question('Your answer: ');

const numberOfRounds = 3;

const getQuestion = pair => car(pair);
const getAnswer = pair => cdr(pair);

export default (description, generateGameData, userNameFromMenu) => {
  const hasName = userNameFromMenu !== undefined;
  if (!hasName) console.log(welcomeMessage);
  console.log(`\n${description}\n`);
  const name = hasName ? userNameFromMenu : getName();
  if (!hasName) console.log(`Hello, ${name}!\n`);

  const runRound = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const gameData = generateGameData();
    const question = getQuestion(gameData);
    console.log(`Question: ${question}`);

    const userAnswer = getUserAnswer();
    const answer = getAnswer(gameData);
    const isAnswerCorrect = userAnswer === answer;
    if (isAnswerCorrect) {
      console.log('Correct!');
      runRound(count - 1);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
  };
  runRound(numberOfRounds);
};

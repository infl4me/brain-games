import readlineSync from 'readline-sync';

export const welcomeMessage = 'Welcome to the Brain Games!';

export const getName = () => readlineSync.question('May I have your name? ');

export default () => {
  console.log(`${welcomeMessage}\n`);

  console.log(`Hello, ${getName()}!`);
};

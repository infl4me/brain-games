import { welcomeMessage, getName } from './gameEngine';

export default () => {
  console.log(`${welcomeMessage}\n`);

  console.log(`Hello, ${getName()}!`);
};

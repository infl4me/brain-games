import { welcomeMessage, getName } from './lib/gameEngine';

export default () => {
  console.log(`${welcomeMessage}\n`);

  console.log(`Hello, ${getName()}!`);
};

import basisOfGames from './index.js';
import getRandomInt from './getRandomInt.js';

const parity = () => {
  const noteToParity = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskParity = () => {
    const number = getRandomInt(100);

    const question = `${number}`;

    let result = '';
    if (number % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [question, result];
  };
  basisOfGames(noteToParity, taskParity);
};

export default parity;

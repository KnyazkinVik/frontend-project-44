import basisOfGames from './index.js';
import getRandomInt from './getRandomInt.js';

const prime = () => {
  const noteToPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (number) => {
    if (number === 1) {
      return 'no';
    } for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    } return 'yes';
  };

  const taskPrime = () => {
    const number = getRandomInt(100);

    const question = `${number}`;
    const result = isPrime(number);

    return [question, result];
  };

  basisOfGames(noteToPrime, taskPrime);
};

export default prime;

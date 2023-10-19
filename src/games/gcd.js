import basisOfGames from './index.js';
import getRandomInt from './getRandomInt.js';

const gcd = () => {
  const noteToJcd = 'Find the greatest common divisor of given numbers.';

  const taskGcd = () => {
    let number1 = getRandomInt(100);
    let number2 = getRandomInt(100);

    const question = `${number1} ${number2}`;
    let result = 0;
    while (number1 !== number2) {
      if (number1 > number2) {
        number1 -= number2;
      } else {
        number2 -= number1;
      }
    } result = number1;
    return [question, result];
  };

  basisOfGames(noteToJcd, taskGcd);
};

export default gcd;

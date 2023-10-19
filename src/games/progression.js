import basisOfGames from './index.js';
import getRandomInt from './getRandomInt.js';

const progression = () => {
  const noteToProgression = 'What number is missing in the progression?';

  const taskProgression = () => {
    const array = [];
    let a = getRandomInt(100);
    const p = getRandomInt(9);
    for (let i = 0; i < 10; i += 1, a += p) {
      array[i] = a;
    }

    const result = array[p];

    array[p] = '..';
    const question = array.join(' ');

    return [question, result];
  };

  basisOfGames(noteToProgression, taskProgression);
};

export default progression;

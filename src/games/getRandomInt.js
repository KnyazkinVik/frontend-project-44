const getRandomInt = (int) => {
  const number = (Math.floor(Math.random() * int) + 1);
  return number;
};

export default getRandomInt;

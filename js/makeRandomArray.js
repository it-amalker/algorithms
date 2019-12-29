export default (arrayLength, maxRandomNum) => {
  const getRandomNumber = (max) => {
    const min = 0;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const numbers = [];
  for (let i = 0; i < arrayLength; i++) {
    numbers.push(getRandomNumber(maxRandomNum));
  }

  return numbers;
};

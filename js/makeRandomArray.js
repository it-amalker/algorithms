const makeList = (len, max) => {
  let array = [];
  for (let i = 0; i < len; i++) {
    array.push(getRandomInt(max));
  }
  return array;
};

const getRandomInt = (max) => {
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default makeList;
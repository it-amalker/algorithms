import { inputValue1 as arrLength, inputValue2 as maxInt } from './elements.js';
import * as elem from './elements.js';
import random from './makeRandomArray.js';

elem.calcButton.addEventListener('click', (event) => {
  event.preventDefault();
  elem.displayReset();

  if (+maxInt.value < 1) {
    elem.toDisplay('MAX array number must be greater than 1', 'w');
    return;
  }
  if (+arrLength.value > 1) {
    const arr = random(arrLength.value, maxInt.value);
    const sortedArr = quickSort(arr);
    const sortInfo = "Array start: [" + sortedArr[0] + "], [" + sortedArr[1] + "], [" + sortedArr[2] + "] ... ";
    const sortInfo2 = "Array end: [" + sortedArr[sortedArr.length - 3] + "], [" + sortedArr[sortedArr.length - 2] + "], [" + sortedArr[sortedArr.length - 1] + "]";
    elem.toDisplay(sortedArr, 'scr');
    elem.toDisplay(sortInfo, 1);
    elem.toDisplay(sortInfo2, 2);
    elem.toDisplay('Sorting complete', 3);
  } else {
    elem.toDisplay('This array always will be ordered, try input number greater than 1', 'w');
  }
});

const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  let less = [];
  let greater = [];
  for (let i = 1; i < array.length; i += 1) {
    array[i] <= pivot ? less.push(array[i]) : greater.push(array[i]);
  }
  return quickSort(less).concat([pivot], quickSort(greater));
};

export default quickSort;
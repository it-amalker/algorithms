import * as elem from './elements.js';
import random from './makeRandomArray.js';

elem.calcButton.addEventListener('click', (event) => {
  event.preventDefault();
  elem.displayReset();

  if (+elem.maxInt.value < 1) {
    elem.toDisplay('Min number is 1', 'w');
    return;
  }
  if (+elem.arrLength.value > 1) {
    const array = random(elem.arrLength.value, elem.maxInt.value);
    const values = selectionSort(array);
    const sortInfo = "Array start: [" + values[0] + "], [" + values[1] + "], [" + values[2] + "] ... ";
    const sortInfo2 = "Array end: [" + values[values.length - 3] + "], [" + values[values.length - 2] + "], [" + values[values.length - 1] + "]";
    elem.toDisplay(values, 'scr');
    elem.toDisplay(sortInfo, 1);
    elem.toDisplay(sortInfo2, 2);
    elem.toDisplay('Sorting complete', 3);
  } else {
    elem.toDisplay('This array always will be ordered, try input number greater than 1', 'w');
  }
});

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (arr) => {
  let newArr = [];
  while (arr.length !== 0) {
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  return newArr;
}




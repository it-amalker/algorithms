import * as elem from './elements.js';
import { inputValue1 as arrLength, inputValue2 as searchNum } from './elements.js';
import random from './makeRandomArray.js';
import quickSort from './quick-sort.js';

let sortedArr = [];

elem.randomButton.addEventListener('click', (event) => {
  event.preventDefault();
  elem.displayReset();

  sortedArr = quickSort(random(arrLength.value, arrLength.value * 3));

  if (+arrLength.value > 0) {
    elem.toDisplay(sortedArr, 'scr');
    elem.toDisplay('Choose any number from array below, input this number and click search button', 2);
    elem.toDisplay('Array generated successfully', 3);
  } else {
    elem.toDisplay('Array length must be min 1', 'w');
  }
});

elem.calcButton.addEventListener('click', (event) => {
  event.preventDefault();
  elem.displayReset();

  if (!(elem.isNumInArray(sortedArr, +searchNum.value))) {
    return elem.toDisplay('No such number in array', 'w');
  }

  if (+searchNum.value > 0) {
    const [steps, searchingIndex] = findNumber(sortedArr, +searchNum.value);
    const info = `MAX steps ${Math.ceil(Math.log2(sortedArr.length))}`;
    const info2 = `Completed in ${steps} steps`;
    const info3 = `Index of searching number is: ${searchingIndex}`;

    elem.toDisplay(sortedArr, 'scr');
    elem.toDisplay(info, 1);
    elem.toDisplay(info2, 2);
    elem.toDisplay(info3, 3);
  } else {
    elem.toDisplay('Search number must be positive', 'w');
  }
});

const findNumber = (list, item) => {
  let lowIndex = 0;
  let highIndex = list.length - 1;
  let midIndex = 0;
  let guess = 0;
  let steps = 1;
  console.log()

  while (lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);
    guess = list[midIndex];
    if (guess === item) {
      return [steps, midIndex];
    }
    if (guess > item) {
      highIndex = midIndex - 1;
    }
    if (guess < item) {
      lowIndex = midIndex + 1;
    }
    steps += 1;
  }
  return 'None';
};
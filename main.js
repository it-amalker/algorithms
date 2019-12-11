let display = document.querySelector('#display-1');
let displayTwo = document.querySelector('#display-2');
let displayThree = document.querySelector('#display-3');
let displayWarning = document.querySelector('#display-warning');
const listLen = document.getElementById('input-value-1');
const num = document.getElementById('input-value-2');

document.querySelector('#calc-button').addEventListener('click', (event) => {
  event.preventDefault();
  if (Number(listLen.value) > Number(num.value)) {
    let list = makeList(listLen.value);
    const values = findNumber(list, Number(num.value));
    display.innerText = 'MAX steps ' + Math.ceil(Math.log2(list.length));
    displayTwo.innerText = "Completed in " + values[0] + " steps";
    displayThree.innerText = 'Index of searching number is: ' + values[1];
  } else {
    displayWarning.innerText = 'Inputted number is too small, try again.';
  }
  if (Number(listLen.value) === Number(num.value)) {
    display.innerText = 'Inputted number will be the last in array';
  }
});

const makeList = (len) => {
  let array = [];
  for (let i = 0; i < len; i++) {
    array.push(i);
  }
  console.log('Array with length of ' + array.length + ' elements is completed');
  return array;
};

const findNumber = (list, item) => {
  let lowIndex = 0;
  let highIndex = list.length - 1;
  let midIndex = 0;
  let guess = 0;
  let steps = 1;


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

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //test



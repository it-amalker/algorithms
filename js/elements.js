export let display = document.querySelector('#display-1');
export let display2 = document.querySelector('#display-2');
export let display3 = document.querySelector('#display-3');
export let displayWarning = document.querySelector('#display-warning');
export let screen = document.querySelector('#screen');
export const inputValue1 = document.getElementById('input-value-1');
export const inputValue2 = document.getElementById('input-value-2');
export const calcButton = document.querySelector('#calc-button');
export const randomButton = document.querySelector('#random-gen-button');

export const toDisplay = (str, numberOfDisplay) => {
  switch (numberOfDisplay) {
    case 1:
      display.innerText = str;
      break;
    case 2:
      display2.innerText = str;
      break;
    case 3:
      display3.innerText = str;
      break;
    case 'w':
      displayWarning.innerText = str;
      break;
    case 'scr':
      screen.innerText = str;
      break;
    default:
      return;
  }
};

export const displayReset = () => {
  display.innerText = '';
  display2.innerText = '';
  display3.innerText = '';
  displayWarning.innerText = '';
  screen.innerText = '';
};

export const isNumInArray = (array, num) => {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (num === array[i]) {
      count += 1;
    }
  }
  return count > 0;
};
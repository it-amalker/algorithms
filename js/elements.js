export let display = document.querySelector('#display-1');
export let display2 = document.querySelector('#display-2');
export let display3 = document.querySelector('#display-3');
export let displayWarning = document.querySelector('#display-warning');
export let screen = document.querySelector('#screen');
export const arrLength = document.getElementById('input-value-1');
export const maxInt = document.getElementById('input-value-2');
export const calcButton = document.querySelector('#calc-button');

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
};
let screenValue = '0';
let previousValue = 0;
let currentAction = '+'; // +, - , /, *
// let dotAdded = false;
// let zerosAfterDot = 0;
let operandAppliedBefore = false;
let equalAppliedBefore = false;

const maxNumLengthForScreen = 16;
const numberFormat = Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 10,
});

document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    registerKeyEvents();
    applyTheme('theme1');
    setScreenValue(screenValue);
  }
};

function registerKeyEvents() {
  document.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    handleInput(event.key);
  });
}

function handleInput(input) {
  if (!isNaN(+input)) {
    if (!operandAppliedBefore && !equalAppliedBefore) addNumberToDisplay(input);
    else setScreenValue(input);
    operandAppliedBefore = false;
    equalAppliedBefore = false;
    return;
  }

  switch (input) {
    case '.':
      addDotToDisplay();
      break;
    case 'RESET':
      resetScreen();
      break;
    case 'DEL':
    case 'Delete':
      performDelete();
      break;
    case '+':
    case '-':
    case '/':
    case '*':
    case '=':
      applyOperand(input);
      break;
  }
}

// function performDelete() {
//   if (operandAppliedBefore) {
//     screenValue = '0';
//     setScreenValue('0');
//     return;
//   }
//   let currScreenValue = screenValue.toString();
//   let newValue = currScreenValue.slice(0, -1);
//   screenValue = +newValue;
//   setScreenValue(newValue);
// }
function performDelete() {
  if (operandAppliedBefore) {
    screenValue = '0';
    setScreenValue('0');
    return;
  }

  setScreenValue(screenValue.slice(0, -1));
}

// function applyOperand(operator) {
//   if (operandAppliedBefore) {
//     currentAction = operator;
//     return;
//   }
//   let newValue = calculate(previousValue, screenValue, currentAction);
//   previousValue = newValue;
//   screenValue = newValue;
//   setScreenValue(screenValue);
//   if (operator !== '=') {
//     currentAction = operator;
//     operandAppliedBefore = true;
//   }
// }
function applyOperand(operator) {
  if (operandAppliedBefore) {
    currentAction = operator;
    return;
  }
  if (equalAppliedBefore) {
    previousValue = +screenValue;
    screenValue = '0';
    currentAction = operator;
    return;
  }
  let newValue = calculate(+previousValue, +screenValue, currentAction);
  previousValue = newValue;
  setScreenValue(newValue.toString());
  if (operator !== '=') {
    currentAction = operator;
    operandAppliedBefore = true;
  } else {
    equalAppliedBefore = true;
    currentAction = '+';
    operandAppliedBefore = false;
    previousValue = screenValue;
    // screenValue = '0';
  }
}

// function applyEqual() {

// }

function calculate(x, y, operator) {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '/':
      return x / y;
    case '*':
      return x * y;
  }
}

function addNumberToDisplay(num) {
  if (screenValue === '0' && num == 0) {
    return;
  }
  let value = screenValue === '0' ? num : `${screenValue}${num}`;
  setScreenValue(`${value}`);
}

function addDotToDisplay() {
  if (screenValue.includes('.')) {
    return;
  }
  setScreenValue(`${screenValue}.`);
}

// function addNumberToDisplay(num) {
//   if (dotAdded && Number.isInteger(screenValue) && num == 0) {
//     zerosAfterDot++;

//     //`${formatNumber(value)}.${genZeroString(zeroAfterDot)}`
//   }

//   let newScreenValue = screenValue * 10 + num;
//   setScreenValue(newScreenValue);
// }

function genZeroString(count) {
  let result = '';
  for (let i = 0; i < count; i++) result += '0';
  return result;
}

function resetScreen() {
  screenValue = '0';
  previousValue = 0;
  currentAction = '+';
  // dotAdded = false;
  // zerosAfterDot = 0;
  operandAppliedBefore = false;
  setScreenValue('0');
}

//#region THEME

function removeAllThemes(containerElem) {
  containerElem.classList.remove('theme1');
  containerElem.classList.remove('theme2');
  containerElem.classList.remove('theme3');
  document.querySelectorAll('div.theme-btn-inner').forEach((elem) => {
    elem.style.display = 'none';
  });
}

function applyTheme(themeName) {
  const container = document.querySelector('body');
  removeAllThemes(container);
  document.querySelector(`div.theme-btn-inner.${themeName}`).style.display =
    'block';
  container.classList.add(themeName);
}

//#endregion

function formatNumber(value) {
  if (value.toString().length > maxNumLengthForScreen)
    return Number.parseFloat(value).toExponential(9);

  return numberFormat.format(value);
}

// function setScreenValue(value) {
//   const elem = document.querySelector('div.display-screen > span');
//   if (dotAdded && Number.isInteger(+screenValue))
//     elem.innerText = `${formatNumber(value)}.${genZeroString(zerosAfterDot)}`;
//   else elem.innerText = formatNumber(+value);
//   screenValue = value;
// }
function setScreenValue(value) {
  const elem = document.querySelector('div.display-screen > span');
  elem.innerText = formatNumber(+value);
  screenValue = value;
}

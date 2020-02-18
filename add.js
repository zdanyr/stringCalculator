const {
  splitInputReturnAfterBreakLine,
} = require('./splitInputReturnAfterBreakLine');

const {
  handleOneOrManyCustomDelimitersAnyLength,
} = require('./handleOneOrManyCustomDelimitersAnyLength');

const {
  isCustomSeparator,
  isCommaOrBreakLineSeparator,
  isOneOrManyCustomDelimitersAnyLength,
} = require('./utils');

function add(input) {
  const arrayOfNumbers = cleanUpInput(input);
  return sum(arrayOfNumbers);
}

function cleanUpInput(input) {
  let arrayOfNumbers = 0;

  if (input === '') {
    arrayOfNumbers = 0;
  }

  if (isCustomSeparator(input)) {
    arrayOfNumbers = handleCustomDelimiter(input);
  }

  if (isOneOrManyCustomDelimitersAnyLength(input)) {
    arrayOfNumbers = handleOneOrManyCustomDelimitersAnyLength(input);
  }

  if (isCommaOrBreakLineSeparator(input)) {
    arrayOfNumbers = inputToArrayCommaBackSlashSeparator(input);
  }

  return arrayOfNumbers;
}

function sum(numbers) {
  let sum = 0;

  if (numbers === 0) {
    return 0;
  }

  numbers.forEach(element => {
    sum = sum + parseInt(element);
  });
  return sum;
}

function handleCustomDelimiter(userInput) {
  let userCustomDelimiter = findDelimiter(userInput);
  let inputToSum = splitInputReturnAfterBreakLine(userInput);
  let arrayOfNumbers = convertInputWithCustomSeparatorIntoArray(
    inputToSum,
    userCustomDelimiter,
  );
  return arrayOfNumbers;
}

function findDelimiter(userInput) {
  return userInput.substr(2, 1);
}

function convertInputWithCustomSeparatorIntoArray(
  toConvertIntoArray,
  usingDelimiter,
) {
  let numbers = toConvertIntoArray.split(usingDelimiter);
  return numbers;
}

function inputToArrayCommaBackSlashSeparator(input) {
  let inputWithoutBreakLine = input.replace(/\n/g, ',');
  let numbers = inputWithoutBreakLine.split(',');
  return numbers;
}

module.exports = {
  add,
  sum,
  findDelimiter,
  splitInputReturnAfterBreakLine,
  inputToArrayCommaBackSlashSeparator,
  convertInputWithCustomSeparatorIntoArray,
};

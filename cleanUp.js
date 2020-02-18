const {
  splitInputReturnAfterBreakLine,
} = require('./splitInputReturnAfterBreakLine');

const {
  handleOneOrManyCustomDelimitersAnyLength,
} = require('./handleOneOrManyCustomDelimitersAnyLength');

const {
  isSingleCustomSeparator,
  isCommaOrBreakLineSeparator,
  isOneOrManyCustomDelimitersAnyLength,
} = require('./utils');

function cleanUpInput(input) {
  let arrayOfNumbers = 0;

  if (input === '') {
    arrayOfNumbers = 0;
  }

  if (isSingleCustomSeparator(input)) {
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
  cleanUpInput,
  findDelimiter,
  inputToArrayCommaBackSlashSeparator,
  convertInputWithCustomSeparatorIntoArray,
};

const {
  isCommaOrBreakLineSeparator,
  handleCommaOrBreakLineSeparator,
} = require('./handleCommaOrBreakLineSeparator');

const {
  isSingleCustomSeparator,
  handleSingleCustomDelimiter,
} = require('./handleSingleCustomDelimiter');

const {
  isOneOrManyCustomDelimitersAnyLength,
  handleOneOrManyCustomDelimitersAnyLength,
} = require('./handleOneOrManyCustomDelimitersAnyLength');

const {
  hasValueGraterThan1000,
  handleNumbersGraterThan1000,
} = require('./removeNumbersGraterThan1000');

const {
  hasNegativeNumbers,
  handleNegativeNumbers,
} = require('./handleNegativeNumbers');

function cleanUpInput(input) {
  let arrayOfNumbers;

  if (hasNegativeNumbers(input)) {
    console.log(`exeption: ${handleNegativeNumbers(input)}`);
    throw handleNegativeNumbers(input);
  }

  if (input === '') {
    return (arrayOfNumbers = 0);
  }

  if (hasValueGraterThan1000(input)) {
    arrayOfNumbers = handleNumbersGraterThan1000(input);
    return arrayOfNumbers;
  }

  if (isSingleCustomSeparator(input)) {
    return (arrayOfNumbers = handleSingleCustomDelimiter(input));
  }

  if (isOneOrManyCustomDelimitersAnyLength(input)) {
    return (arrayOfNumbers = handleOneOrManyCustomDelimitersAnyLength(input));
  }

  if (isCommaOrBreakLineSeparator(input)) {
    return (arrayOfNumbers = handleCommaOrBreakLineSeparator(input));
  }

  return arrayOfNumbers;
}

module.exports = {
  cleanUpInput,
};

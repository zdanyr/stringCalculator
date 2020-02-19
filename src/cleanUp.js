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

function cleanUpInput(input) {
  let arrayOfNumbers;

  if (input === '') {
    return (arrayOfNumbers = 0);
  }

  if (hasValueGraterThan1000(input)) {
    arrayOfNumbers = handleNumbersGraterThan1000(input);
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

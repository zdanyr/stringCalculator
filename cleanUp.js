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

function cleanUpInput(input) {
  let arrayOfNumbers;

  if (input === '') {
    arrayOfNumbers = 0;
  }

  if (isSingleCustomSeparator(input)) {
    arrayOfNumbers = handleSingleCustomDelimiter(input);
  }

  if (isOneOrManyCustomDelimitersAnyLength(input)) {
    arrayOfNumbers = handleOneOrManyCustomDelimitersAnyLength(input);
  }

  if (isCommaOrBreakLineSeparator(input)) {
    arrayOfNumbers = handleCommaOrBreakLineSeparator(input);
  }

  return arrayOfNumbers;
}

module.exports = {
  cleanUpInput,
};

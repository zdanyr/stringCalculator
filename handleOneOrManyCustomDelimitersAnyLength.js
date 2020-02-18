const {
  splitInputReturnAfterBreakLine,
  splitInputReturnBeforeBreakLine,
} = require('./utils');

function isOneOrManyCustomDelimitersAnyLength(userInput) {
  const isManyCustomSeparatorsAnyLengthFormat = /^\/\/(\[.+\])+\n/;
  return isManyCustomSeparatorsAnyLengthFormat.test(userInput);
}

function handleOneOrManyCustomDelimitersAnyLength(userInput) {
  let customDelimiters = handleInputBeforeBreakLine(userInput);
  let numbersAsArray = handleInputAfterBreakLine(userInput, customDelimiters);
  return numbersAsArray;
}

function handleInputBeforeBreakLine(userInput) {
  let inputBeforeBreakLine = splitInputReturnBeforeBreakLine(userInput);
  let inputBeforeBreakLineAsArray = inputBeforeBreakLine.split('');
  let customDelimiters = findAllDelimitersFromInput(
    inputBeforeBreakLineAsArray,
  );
  return customDelimiters;
}

function handleInputAfterBreakLine(userInput, customDelimiters) {
  let numbers = splitInputReturnAfterBreakLine(userInput);
  let inputSeparatedByComma = removeAllCustomDelimitersFromInput(
    numbers,
    customDelimiters,
  );
  inputSeparatedByComma = inputSeparatedByComma.split(',');
  return inputSeparatedByComma;
}

function findCustomDelimiter(inputBeforeBreakAsArray) {
  let openBracket = inputBeforeBreakAsArray.indexOf('[');
  let closeBracket = inputBeforeBreakAsArray.indexOf(']');
  let customDelimiter = inputBeforeBreakAsArray.slice(
    openBracket + 1,
    closeBracket,
  );
  return customDelimiter.join('');
}

function findAllDelimitersFromInput(inputBeforeBreakLineAsArray) {
  let customDelimiter = new Array();
  for (let i = 0; i < inputBeforeBreakLineAsArray.length; i++) {
    customDelimiter[i] = findCustomDelimiter(inputBeforeBreakLineAsArray);
    inputBeforeBreakLineAsArray = replaceCustomDelimiterWithEmptySpace(
      inputBeforeBreakLineAsArray,
      customDelimiter[i],
    );
  }
  return customDelimiter;
}

function replaceCustomDelimiterWithEmptySpace(
  userInputCommaSeparated,
  customDelimiter,
) {
  let userInputAsString = userInputCommaSeparated.join('');
  let positionOfCustomDelimiter = userInputAsString.indexOf(customDelimiter);
  return userInputAsString
    .slice(positionOfCustomDelimiter + customDelimiter.length + 1)
    .split('');
}

function removeCustomDelimiterFromInput(
  userInputWithManyDelimiters,
  usingDelimiter,
) {
  let delimiterWithoutSpecialCharacters = escapeRegExp(usingDelimiter);
  let delimiterWithoutSpecialCharactersAsREx = new RegExp(
    delimiterWithoutSpecialCharacters,
    'gi',
  );
  userInputWithManyDelimiters = userInputWithManyDelimiters.replace(
    delimiterWithoutSpecialCharactersAsREx,
    ',',
  );
  return userInputWithManyDelimiters;
}

function removeAllCustomDelimitersFromInput(numbers, customDelimiters) {
  for (let i = 0; i < customDelimiters.length; i++) {
    numbers = removeCustomDelimiterFromInput(numbers, customDelimiters[i]);
  }
  return numbers;
}

//no tested
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

module.exports = {
  isOneOrManyCustomDelimitersAnyLength,
  handleOneOrManyCustomDelimitersAnyLength,
  removeCustomDelimiterFromInput,
  removeAllCustomDelimitersFromInput,
  handleInputAfterBreakLine,
  replaceCustomDelimiterWithEmptySpace,
  findCustomDelimiter,
  findAllDelimitersFromInput,
  handleInputBeforeBreakLine,
};

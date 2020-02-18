const {
  splitInputReturnAfterBreakLine,
} = require('./splitInputReturnAfterBreakLine');
const { sum } = require('./add');

let inputBeforeBreakLineAsArray = new Array();

function handleOneOrManyCustomDelimitersAnyLength(userInput) {
  let customDelimiters = handleInputBeforeBreakLine(userInput);
  let numbersAsArray = handleInputAfterBreakLine(userInput, customDelimiters);
  return numbersAsArray;
}

//no tested
function handleInputBeforeBreakLine(userInput) {
  let inputBeforeBreakLine = splitInputReturnBeforeBreakLine(userInput);
  let inputBeforeBreakLineAsArray = inputBeforeBreakLine.split('');
  let customDelimiters = findAllDelimitersFromInput(
    inputBeforeBreakLineAsArray,
  );
  return customDelimiters;
}
//no tested
function handleInputAfterBreakLine(userInput, customDelimiters) {
  // console.log(`
  // userInput: ${userInput}
  // customDelimiters: ${customDelimiters}
  // `);
  let numbers = splitInputReturnAfterBreakLine(userInput);
  let inputSeparatedByComma = removeAllCustomDelimitersFromInput(
    numbers,
    customDelimiters,
  );

  inputSeparatedByComma = inputSeparatedByComma.split(',');
  // console.log(`inputSeparatedByComma: ${inputSeparatedByComma}`);
  return inputSeparatedByComma;
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

function splitInputReturnBeforeBreakLine(userInput) {
  let positionOfSlashN = userInput.indexOf('\n');
  return userInput.substr(0, positionOfSlashN + 1);
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

function removeAllCustomDelimitersFromInput(numbers, customDelimiters) {
  for (let i = 0; i < customDelimiters.length; i++) {
    numbers = removeCustomDelimiterFromInput(numbers, customDelimiters[i]);
  }
  return numbers;
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
//no tested
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

module.exports = {
  handleOneOrManyCustomDelimitersAnyLength,
  removeCustomDelimiterFromInput,
  removeAllCustomDelimitersFromInput,
  handleInputAfterBreakLine,
  replaceCustomDelimiterWithEmptySpace,
  findCustomDelimiter,
  splitInputReturnBeforeBreakLine,
  findAllDelimitersFromInput,
  handleInputAfterBreakLine,
};

const { splitInputReturnAfterBreakLine } = require("./splitInputReturnAfterBreakLine");

let inputBeforeBreakLineAsArray = new Array();

function handleOneOrManyCustomDelimitersAnyLength(userInput) {
  let customDelimiters = handleInputBeforeBreakLine(userInput);
  handleInputAfterBreakLine(userInput, customDelimiters);
}

//no tested
function handleInputBeforeBreakLine(userInput) {
  let inputBeforeBreakLine = splitInputReturnBeforeBreakLine(userInput); //[a][b][c][d]
  inputBeforeBreakLineAsArray = inputBeforeBreakLine.split("");
  let customDelimiters = findAllDelimitersFromInput();
  return customDelimiters;
}
//no tested
function handleInputAfterBreakLine(userInput, customDelimiters) {
  let numbers = splitInputReturnAfterBreakLine(userInput);
  removeAllCustomDelimitersFromInput(numbers, customDelimiters);
}
//no tested
function findAllDelimitersFromInput() {
  let customDelimiter = new Array();
  for (let i = 0; i < inputBeforeBreakLineAsArray.length; i++) {
    customDelimiter[i] = findCustomDelimiter(inputBeforeBreakLineAsArray);
    replaceCustomDelimiterWithEmptySpace(
      inputBeforeBreakLineAsArray,
      customDelimiter[i]
    );
  }
  return customDelimiter;
}
//no tested
function splitInputReturnBeforeBreakLine(userInput) {
  let positionOfSlashN = userInput.indexOf("\n");
  return userInput.substr(0, positionOfSlashN + 1);
}
//no tested
function findCustomDelimiter(inputBeforeBreakAsArray) {
  let openBracket = inputBeforeBreakAsArray.indexOf("[");
  let closeBracket = inputBeforeBreakAsArray.indexOf("]");
  let customDelimiter = inputBeforeBreakAsArray.slice(
    openBracket + 1,
    closeBracket
  );
  return customDelimiter.join("");
}
//no tested
function replaceCustomDelimiterWithEmptySpace(userInputArray, customDelimiter) {
  let userInputAsString = userInputArray.join("");
  let positionOfCustomDelimiter = userInputAsString.indexOf(customDelimiter);
  inputBeforeBreakLineAsArray = userInputAsString
    .slice(positionOfCustomDelimiter + customDelimiter.length + 1)
    .split("");
}
//no tested
function removeAllCustomDelimitersFromInput(numbers, customDelimiters) {
  for (let i = 0; i < customDelimiters.length; i++) {
    numbers = removeCustomDelimiterFromInput(numbers, customDelimiters[i]);
  }
  return numbers;
}

function removeCustomDelimiterFromInput(
  userInputWithManyDelimiters,
  usingDelimiter
) {
  let delimiterWithoutSpecialCharacters = escapeRegExp(usingDelimiter);
  let delimiterWithoutSpecialCharactersAsREx = new RegExp(
    delimiterWithoutSpecialCharacters,
    "gi"
  );
  userInputWithManyDelimiters = userInputWithManyDelimiters.replace(
    delimiterWithoutSpecialCharactersAsREx,
    ","
  );
  return userInputWithManyDelimiters;
}
//no tested
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}


module.exports = {
  handleOneOrManyCustomDelimitersAnyLength,
  removeCustomDelimiterFromInput,
  removeAllCustomDelimitersFromInput,
};

const { splitInputReturnAfterBreakLine } = require("./splitInputReturnAfterBreakLine");
let { numbers } = require("./add");

let inputBeforeBreakLineAsArray = new Array();
let customDelimiter = new Array();

function handleOneOrManyCustomDelimitersAnyLength(userInput) {
  handleInputBeforeBreakLine(userInput);
  handleInputAfterBreakLine(userInput);
}

//no tested
function handleInputBeforeBreakLine(userInput) {
  let inputBeforeBreakLine = splitInputReturnBeforeBreakLine(userInput); //[a][b][c][d]
  inputBeforeBreakLineAsArray = inputBeforeBreakLine.split("");
  findAllDelimitersFromInput();
}
//no tested
function handleInputAfterBreakLine(userInput) {
  numbers = splitInputReturnAfterBreakLine(userInput);
  removeAllCustomDelimitersFromInput();
}
//no tested
function findAllDelimitersFromInput() {
  for (let i = 0; i < inputBeforeBreakLineAsArray.length; i++) {
    customDelimiter[i] = findCustomDelimiter(inputBeforeBreakLineAsArray);
    replaceCustomDelimiterWithEmptySpace(
      inputBeforeBreakLineAsArray,
      customDelimiter[i]
    );
  }
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
function removeAllCustomDelimitersFromInput() {
  for (let i = 0; i < customDelimiter.length; i++) {
    numbers = removeCustomDelimiterFromInput(numbers, customDelimiter[i]);
  }
}
//no tested
function removeCustomDelimiterFromInput(
  userInputWithManyDelimiters,
  usingDelimiter
) {
  let delimiterWithoutSpecialCharacters = escapeRegExp(usingDelimiter);
  let delimiterWithoutSpecialCharactersAsREx = new RegExp(
    delimiterWithoutSpecialCharacters,
    "gi"
  );
  numbers = userInputWithManyDelimiters.replace(
    delimiterWithoutSpecialCharactersAsREx,
    ","
  );
  return numbers;
}
//no tested
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}


module.exports = {
  handleOneOrManyCustomDelimitersAnyLength,
  removeCustomDelimiterFromInput,
};

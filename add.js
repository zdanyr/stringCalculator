let isCustomSeparatorFormat = /^\/\/.\n/; //Eg. //;\n1;2;7  //-\n1-2
isManyCustomSeparatorsAnyLengthFormat = /^\/\/(\[.+\])+\n/;
let numbers;
let inputBeforeBreakLineAsArray = new Array
let customDelimiter = new Array

function add(input) {
  if (input === "") return 0;
  if (isCustomSeparator(input)) {
    handleCustomDelimiter(input);
    return sum(numbers);
  }

  if (isOneOrManyCustomDelimitersAnyLength(input)) {
    handleOneOrManyCustomDelimitersAnyLength(input);
    numbers = numbers.split(',');
    return sum(numbers);
  }

  numbers = inputToArrayCommaBackSlashSeparator(input);
  return sum(numbers);
}

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
        replaceCustomDelimiterWithEmptySpace(inputBeforeBreakLineAsArray, customDelimiter[i]);
    }
}

//no tested
function splitInputReturnBeforeBreakLine(userInput) {
    let positionOfSlashN = userInput.indexOf("\n");
    return userInput.substr(0, positionOfSlashN + 1);
}

//no tested
function findCustomDelimiter(inputBeforeBreakAsArray) {
    let openBracket = inputBeforeBreakAsArray.indexOf('[');
    let closeBracket = inputBeforeBreakAsArray.indexOf(']');
    let customDelimiter = inputBeforeBreakAsArray.slice(openBracket + 1, (closeBracket));
    return customDelimiter.join('');
}

//no tested
function replaceCustomDelimiterWithEmptySpace(userInputArray, customDelimiter) {
    let userInputAsString = userInputArray.join('');
    let positionOfCustomDelimiter = userInputAsString.indexOf(customDelimiter);
    inputBeforeBreakLineAsArray = userInputAsString.slice(positionOfCustomDelimiter + customDelimiter.length + 1).split('');
}

//no tested
function removeAllCustomDelimitersFromInput() {
    for (let i = 0; i < customDelimiter.length; i++) {
        numbers = removeCustomDelimiterFromInput(numbers, customDelimiter[i]);
    }
}

//no tested
function removeCustomDelimiterFromInput(userInputWithManyDelimiters, usingDelimiter) {
    let delimiterWithoutSpecialCharacters = escapeRegExp(usingDelimiter);
    let delimiterWithoutSpecialCharactersAsREx = new RegExp(delimiterWithoutSpecialCharacters, 'gi');
    numbers = userInputWithManyDelimiters.replace(delimiterWithoutSpecialCharactersAsREx, ',');
    return numbers;
}

//no tested
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function isCustomSeparator(input) {
  return isCustomSeparatorFormat.test(input);
}

function isOneOrManyCustomDelimitersAnyLength(userInput) {
  return isManyCustomSeparatorsAnyLengthFormat.test(userInput);
}

function sum(numbers) {
  let sum = 0;
  numbers.forEach(element => {
    sum = sum + parseInt(element);
  });
  return sum;
}

function handleCustomDelimiter(userInput) {
  let userCustomDelimiter = findDelimiter(userInput);
  let inputToSum = splitInputReturnAfterBreakLine(userInput);
  numbers = convertInputWithCustomSeparatorIntoArray(inputToSum, userCustomDelimiter);
}

function findDelimiter(userInput) {
  return userInput.substr(2, 1);
}

function splitInputReturnAfterBreakLine(userInput) {
  return userInput.substr(userInput.indexOf("\n") + 1);
}

function convertInputWithCustomSeparatorIntoArray(
  toConvertIntoArray,
  usingDelimiter
) {
  numbers = toConvertIntoArray.split(usingDelimiter);
  return numbers;
}

function inputToArrayCommaBackSlashSeparator(input) {
  let inputWithoutBreakLine = input.replace(/\n/g, ",");
  numbers = inputWithoutBreakLine.split(",");
  return numbers;
}

module.exports = {
  add,
  sum,
  findDelimiter,
  splitInputReturnAfterBreakLine,
  inputToArrayCommaBackSlashSeparator,
  convertInputWithCustomSeparatorIntoArray,
  isOneOrManyCustomDelimitersAnyLength,
  isCustomSeparator
};

const { splitInputReturnAfterBreakLine } = require("./splitInputReturnAfterBreakLine");

const { handleOneOrManyCustomDelimitersAnyLength } = require("./handleOneOrManyCustomDelimitersAnyLength");

let isCustomSeparatorFormat = /^\/\/.\n/; //Eg. //;\n1;2;7  //-\n1-2
isManyCustomSeparatorsAnyLengthFormat = /^\/\/(\[.+\])+\n/;
// let inputBeforeBreakLineAsArray = new Array;
// exports.inputBeforeBreakLineAsArray = inputBeforeBreakLineAsArray;
// let customDelimiter = new Array;
// exports.customDelimiter = customDelimiter;

function add(input) {
  if (input === "") return 0;
  if (isCustomSeparator(input)) {
    let arrayOfNumbers = handleCustomDelimiter(input);
    return sum(arrayOfNumbers);
  }

  if (isOneOrManyCustomDelimitersAnyLength(input)) {
    handleOneOrManyCustomDelimitersAnyLength(input);
    let numbers = numbers.split(',');
    return sum(numbers);
  }

  let arrayOfNumbers = inputToArrayCommaBackSlashSeparator(input);
  return sum(arrayOfNumbers);
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
  let arrayOfNumbers = convertInputWithCustomSeparatorIntoArray(inputToSum, userCustomDelimiter);
  return arrayOfNumbers;
}

function findDelimiter(userInput) {
  return userInput.substr(2, 1);
}

function convertInputWithCustomSeparatorIntoArray(
  toConvertIntoArray,
  usingDelimiter
) {
  let numbers = toConvertIntoArray.split(usingDelimiter);
  return numbers;
}

function inputToArrayCommaBackSlashSeparator(input) {
  let inputWithoutBreakLine = input.replace(/\n/g, ",");
  let numbers = inputWithoutBreakLine.split(",");
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
  isCustomSeparator,
};

let isCustomSeparatorFormat = /^\/\/.\n/; //Eg. //;\n1;2;7  //-\n1-2
isManyCustomSeparatorsAnyLengthFormat = /^\/\/(\[.+\])+\n/
let numbers;

function add(input) {
  if (input === "") return 0;
  if (isCustomSeparator(input)) {
    handleCustomDelimiter(input);
    return sum(numbers);
  }
  numbers = inputToArrayCommaBackSlashSeparator(input);
  return sum(numbers);
}

function isCustomSeparator(input) {
    return isCustomSeparatorFormat.test(input);
}

function isOneOrManyCustomDelimitersAnyLength(userInput) {
    return (isManyCustomSeparatorsAnyLengthFormat.test(userInput))
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

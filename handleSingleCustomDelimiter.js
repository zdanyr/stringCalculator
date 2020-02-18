const { splitInputReturnAfterBreakLine } = require('./utils');

function isSingleCustomSeparator(input) {
  const isSingleCustomSeparatorFormat = /^\/\/.\n/; //Eg. //;\n1;2;7  //-\n1-2
  return isSingleCustomSeparatorFormat.test(input);
}

function handleSingleCustomDelimiter(userInput) {
  let userCustomDelimiter = findDelimiter(userInput);
  let inputToSum = splitInputReturnAfterBreakLine(userInput);
  let arrayOfNumbers = convertInputWithCustomSeparatorIntoArray(
    inputToSum,
    userCustomDelimiter,
  );
  return arrayOfNumbers;
}

function findDelimiter(userInput) {
  return userInput.substr(2, 1);
}

function convertInputWithCustomSeparatorIntoArray(
  toConvertIntoArray,
  usingDelimiter,
) {
  let numbers = toConvertIntoArray.split(usingDelimiter);
  return numbers;
}

module.exports = {
  isSingleCustomSeparator,
  handleSingleCustomDelimiter,
  findDelimiter,
  convertInputWithCustomSeparatorIntoArray,
};

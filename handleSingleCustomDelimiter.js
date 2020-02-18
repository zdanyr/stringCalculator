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

function splitInputReturnAfterBreakLine(userInput) {
  return userInput.substr(userInput.indexOf('\n') + 1);
}

function convertInputWithCustomSeparatorIntoArray(
  toConvertIntoArray,
  usingDelimiter,
) {
  let numbers = toConvertIntoArray.split(usingDelimiter);
  return numbers;
}

module.exports = {
  handleSingleCustomDelimiter,
  findDelimiter,
  splitInputReturnAfterBreakLine,
  convertInputWithCustomSeparatorIntoArray,
};

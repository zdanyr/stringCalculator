function splitInputReturnBeforeBreakLine(userInput) {
  let positionOfSlashN = userInput.indexOf('\n');
  return userInput.substr(0, positionOfSlashN + 1);
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
  splitInputReturnBeforeBreakLine,
  splitInputReturnAfterBreakLine,
  convertInputWithCustomSeparatorIntoArray,
};

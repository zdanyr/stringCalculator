function isCommaOrBreakLineSeparator(input) {
  const isCommaOrBreakLineSeparatorFormat = /^[0-9]+(,[0-9]+)*(\n[0-9]+)*(,[0-9]+)*$/; //'3\n5\n30,9'
  return isCommaOrBreakLineSeparatorFormat.test(input);
}

function isOneOrManyCustomDelimitersAnyLength(userInput) {
  const isManyCustomSeparatorsAnyLengthFormat = /^\/\/(\[.+\])+\n/;
  return isManyCustomSeparatorsAnyLengthFormat.test(userInput);
}

function splitInputReturnAfterBreakLine(userInput) {
  return userInput.substr(userInput.indexOf('\n') + 1);
}

function splitInputReturnBeforeBreakLine(userInput) {
  let positionOfSlashN = userInput.indexOf('\n');
  return userInput.substr(0, positionOfSlashN + 1);
}

module.exports = {
  isCommaOrBreakLineSeparator,
  isOneOrManyCustomDelimitersAnyLength,
  splitInputReturnAfterBreakLine,
  splitInputReturnBeforeBreakLine,
};

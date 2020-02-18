// function isOneOrManyCustomDelimitersAnyLength(userInput) {
//   const isManyCustomSeparatorsAnyLengthFormat = /^\/\/(\[.+\])+\n/;
//   return isManyCustomSeparatorsAnyLengthFormat.test(userInput);
// }

function splitInputReturnAfterBreakLine(userInput) {
  return userInput.substr(userInput.indexOf('\n') + 1);
}

function splitInputReturnBeforeBreakLine(userInput) {
  let positionOfSlashN = userInput.indexOf('\n');
  return userInput.substr(0, positionOfSlashN + 1);
}

module.exports = {
  //isOneOrManyCustomDelimitersAnyLength,
  splitInputReturnAfterBreakLine,
  splitInputReturnBeforeBreakLine,
};

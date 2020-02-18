function isSingleCustomSeparator(input) {
  const isSingleCustomSeparatorFormat = /^\/\/.\n/; //Eg. //;\n1;2;7  //-\n1-2
  return isSingleCustomSeparatorFormat.test(input);
}

function isCommaOrBreakLineSeparator(input) {
  const isCommaOrBreakLineSeparatorFormat = /^[0-9]+(,[0-9]+)*(\n[0-9]+)*(,[0-9]+)*$/; //'3\n5\n30,9'
  return isCommaOrBreakLineSeparatorFormat.test(input);
}

function isOneOrManyCustomDelimitersAnyLength(userInput) {
  const isManyCustomSeparatorsAnyLengthFormat = /^\/\/(\[.+\])+\n/;
  return isManyCustomSeparatorsAnyLengthFormat.test(userInput);
}

module.exports = {
  isSingleCustomSeparator,
  isCommaOrBreakLineSeparator,
  isOneOrManyCustomDelimitersAnyLength,
};

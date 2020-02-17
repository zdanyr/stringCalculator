const isCustomSeparatorFormat = /^\/\/.\n/; //Eg. //;\n1;2;7  //-\n1-2
const isCommaOrBreakLineSeparatorFormat = /^[0-9]+(,[0-9]+)*(\n[0-9]+)*(,[0-9]+)*$/; //'3\n5\n30,9'
function isCustomSeparator(input) {
  return isCustomSeparatorFormat.test(input);
}

function isCommaOrBreakLineSeparator(input) {
  return isCommaOrBreakLineSeparatorFormat.test(input);
}

module.exports = {
  isCustomSeparator,
  isCommaOrBreakLineSeparator,
};

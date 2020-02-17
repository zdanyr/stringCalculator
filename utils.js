const isCustomSeparatorFormat = /^\/\/.\n/; //Eg. //;\n1;2;7  //-\n1-2

function isCustomSeparator(input) {
  return isCustomSeparatorFormat.test(input);
}

module.exports = {
  isCustomSeparator,
};

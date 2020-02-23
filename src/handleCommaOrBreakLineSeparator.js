function isCommaOrBreakLineSeparator(input) {
  const isCommaOrBreakLineSeparatorFormat = /^[0-9]+(,[0-9]+)*(\n[0-9]+)*(,[0-9]+)*$/; //'3\n5\n30,9'
  return isCommaOrBreakLineSeparatorFormat.test(input);
}

function handleCommaOrBreakLineSeparator(input) {
  const inputWithoutBreakLine = input.replace(/\n/g, ',');
  const numbers = inputWithoutBreakLine.split(',');
  return numbers;
}

module.exports = {
  isCommaOrBreakLineSeparator,
  handleCommaOrBreakLineSeparator,
};

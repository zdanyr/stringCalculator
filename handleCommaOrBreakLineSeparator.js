function handleCommaOrBreakLineSeparator(input) {
  let inputWithoutBreakLine = input.replace(/\n/g, ',');
  let numbers = inputWithoutBreakLine.split(',');
  return numbers;
}

module.exports = { handleCommaOrBreakLineSeparator };

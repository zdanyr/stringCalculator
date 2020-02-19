const { convertInputWithCustomSeparatorIntoArray } = require('./utils');

function hasNegativeNumbers(input) {
  const hasNegativeNumbersFormat = `^-{1}[0-9]+`; //Eg. -1,2,-3
  let arrayOfNumbers;
  arrayOfNumbers = convertInputWithCustomSeparatorIntoArray(input, ',');
  return arrayOfNumbers.some(x => x.match(hasNegativeNumbersFormat));
}

function handleNegativeNumbers(input) {
  let arrayOfNumbers;
  arrayOfNumbers = convertInputWithCustomSeparatorIntoArray(input, ',');
  return messageOfListOfNegativeNumbers(arrayOfNumbers);
}

function messageOfListOfNegativeNumbers(inputAsArray) {
  let negativeNumbers = '';
  for (let position = 0; position < inputAsArray.length; position++) {
    if (inputAsArray[position] < 0) {
      negativeNumbers = `${negativeNumbers} ${inputAsArray[position]}`;
    }
  }
  negativeNumbers = negativeNumbers.replace(/^\s+/g, '');
  negativeNumbers = negativeNumbers.replace(/ /g, ', ');
  return `Negatives not allowed: ${negativeNumbers}`;
}

module.exports = {
  hasNegativeNumbers,
  handleNegativeNumbers,
  messageOfListOfNegativeNumbers,
};

const { convertInputWithCustomSeparatorIntoArray } = require('./utils');

function hasValueGraterThan1000(input) {
  const arrayOfNumbers = convertInputWithCustomSeparatorIntoArray(input, ',');
  return arrayOfNumbers.some(x => x >= 1000);
}

function handleNumbersGraterThan1000(input) {
  let arrayOfNumbers = convertInputWithCustomSeparatorIntoArray(input, ',');
  let valuesToRemove = new Array();
  let valuesToRemoveWithoutEmptyValues = new Array();

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] >= 1000) {
      valuesToRemove[i] = arrayOfNumbers[i];
    }
  }
  valuesToRemoveWithoutEmptyValues = valuesToRemove.filter(rem => rem != '');

  for (let i = 0; i < valuesToRemoveWithoutEmptyValues.length; i++) {
    arrayOfNumbers.splice(
      arrayOfNumbers.indexOf(valuesToRemoveWithoutEmptyValues[i]),
      1,
    );
  }
  return arrayOfNumbers;
}

module.exports = { hasValueGraterThan1000, handleNumbersGraterThan1000 };

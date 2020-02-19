const { cleanUpInput } = require('./cleanUp');

// function add(input) {
//   if (!cleanUpInput(input)) {
//     handleNegativeNumbers(input);
//   } else {
//     const arrayOfNumbers = cleanUpInput(input);
//     return sum(arrayOfNumbers);
//   }
// }

function add(input) {
  const arrayOfNumbers = cleanUpInput(input);
  return sum(arrayOfNumbers);
}

function sum(numbers) {
  let sum = 0;
  if (numbers === 0) return 0;

  numbers.forEach(element => {
    sum = sum + parseInt(element);
  });
  return sum;
}

module.exports = {
  add,
  sum,
};

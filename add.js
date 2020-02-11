function add(input) {
  if (input === "") return 0;
  let numbers = inputToArray(input);
  return sum(numbers);
}

function inputToArray(input) {
    let inputWithoutBreakLine = input.replace(/\n/g, ",");
    let numbers = inputWithoutBreakLine.split(",");
    return numbers;
}

function sum(numbers) {
    let sum = 0;
    numbers.forEach(element => {
        sum = sum + parseInt(element);
    });
    return sum;
}

module.exports = {add, sum, inputToArray};
//module.exports = sum;


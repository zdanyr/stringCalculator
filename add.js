function add(input) {
  if (input === "") return 0;
  let inputWithoutBreakLine = input.replace(/\n/g, ",");
  let numbers = inputWithoutBreakLine.split(",");
  return sum(numbers);
}

module.exports = add;
function sum(numbers) {
    let sum = 0;
    numbers.forEach(element => {
        sum = sum + parseInt(element);
    });
    return sum;
}


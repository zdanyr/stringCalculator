

function add(input) {
    if(input ==='') return 0;
let numbers = input.split(',');
let sum = 0;
numbers.forEach(element => {
    sum=sum+parseInt(element);
});
   return sum;
}

module.exports = add;
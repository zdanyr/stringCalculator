

function add(input) {
    if(input ==='') return 0;
let numbers = input.replace(/\n/g, ',');
let foo = numbers.split(',')
let sum = 0;
foo.forEach(element => {
    sum=sum+parseInt(element);
});
   return sum;
}

module.exports = add;
const numbers = [8, 5, 6, 2, 1, 100];

const square = numbers.map(value => value*value);
// console.log(square);

const sum1 = numbers.map((numbers) => numbers+1);
// console.log(sum1);
let sum2 = 0;
const add = numbers.map(value => {
    sum2 = sum2+value;
    return sum2;
}) 

// console.log(add, sum2);

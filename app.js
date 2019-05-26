const cities = require('cities');
const math = require('./math');

const myCity = cities.zip_lookup('23464');
console.log(myCity);

let x = 2;
let y = 3;

// const adding = math.addNum(x, y);

// console.log(`Adding ${adding}`);
// console.log(`Subtracting ${math.subNum(x, y)}`);
// console.log(`Multiply ${math.multiply(x, y)}`);
// console.log(`Divide ${math.divide(x, y)}`);
// console.log(`Reciprocal ${math.reciprocal(x)}`);
// console.log(`Reciprocal ${math.reciprocal(y)}`);

console.log(`${math.add(x, y)}`);
console.log(`${math.sub(x, y)}`);
console.log(`${math.mult(x, y)}`);
console.log(`${math.neg(x)}`);
console.log(`${math.recip(x)}`);

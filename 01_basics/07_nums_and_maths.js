const score = 70
// console.log(score);

const balance = new Number(2000)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance.toString());

// console.log(balance.toFixed(2));

const newNumber = 100.7647
// console.log(newNumber.toFixed(2));
// console.log(newNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); 
// console.log(hundreds.toLocaleString('en-IN')); 


// ************** MATHS **************

console.log(Math);
console.log(Math.random());
console.log(Math.floor(Math.random()* 10) + 1);

// console.log(Math.round(7.5));
// console.log(Math.ceil(7.8));
// console.log(Math.floor(7.8));
// console.log(Math.abs(-4));
// console.log(Math.max(-4, 5 ,7 ,8, 9));
// console.log(Math.min(4, 5 ,7 ,8, 9));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)
// ********array(part:1)
const myarr = [0, 1, 2, 3, 4]
const myhero = ["superman", "batman", "spiderman"]

const myArr = new Array(2, 3, 4, 5)
// console.log(myarr[1]);

// *array methods

// myarr.push(7)
// myarr.push(8)
// myarr.pop()

// myarr.unshift(5)
// myarr.shift()

// console.log(myarr.includes(6));
// console.log(myarr.indexOf(4));

// const newarr = myarr.join()

// console.log(myarr);
// console.log(newarr);
// console.log(typeof newarr);

// *slice and splice

// console.log("A ", myarr);

const myn1 = myarr.slice(1,3)
// console.log(myn1);
// console.log("B ", myarr);

const myn2 = myarr.splice(1, 3)
// console.log(myn2);
// console.log("C ", myarr);

// ********** array(part:2)
const marvelHeros = ["Ironman", "Thor" , "Dr Strange"]
const dcHeros = ["batman", "superman", "flash"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][0]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// const all_heros = [...marvelHeros, ...dcHeros] // spread
// console.log(all_heros);

const N_array = [1,2,3,[4,5],6, 7,[8,[7,9,[4,5]]]]
const realN_array = N_array.flat(Infinity)
// console.log(realN_array);

console.log(Array.isArray("Louhan"));
console.log(Array.from("Louhan"));
console.log(Array.from({name: "Louhan"}));  // interesting case

let mark1 = 99
let mark2 = 94
let mark3 = 96
console.log(Array.of(mark1, mark2, mark3));
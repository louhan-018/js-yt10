// ******************PRIMITIVE******************
// 7 types: string, number, boolean, null, undefined, symbol, BigInt
// (call by value)

const score = 100
const valueScore = 100.5

const isActive = false
const userEmail = null
let state;

const id = Symbol('789')
const subId = Symbol('123')
// console.log(id === subId);

const bigNum = 423721539161233896n
// console.log(typeof bigNum);



// **********NON-PRIMITIVE(reference)********* 
// Array, Objects, Functions

const heros = ["superman", "batman", "ironman"]

let myObject = {
    name: "Louhan",
    age: 21,
}

const myFunction = function(){
        console.log("Hello");   
}

console.log(typeof heros);

// ###########################################

// stack(Primitive) , Heap(non-primitive)

let userName = "louhanrout"
let anotheruserName = userName

// console.log(userName);
// console.log(anotheruserName);

anotheruserName = "omm"
// console.log(userName);
// console.log(anotheruserName);

let firstUser = {
    email: "omm@google.com",
    upi: "user@ybl"
}
let secondUser = firstUser
console.log(firstUser);
console.log(secondUser);
firstUser.email = "louhan@gmail.com"
console.log(firstUser);
console.log(secondUser);
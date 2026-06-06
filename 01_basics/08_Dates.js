// ********Dates********

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let createdDate = new Date(2025, 4, 18)
// let createdDate = new Date(2025, 4, 18, 6, 25)
// let createdDate = new Date("2025-05-04")
let createdDate = new Date("04-05-2025")
// console.log(createdDate.toLocaleString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(createdDate.getTime());

// console.log(Date.now());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());

// `Day &{newDate.getDay()} and month `

console.log(
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
})
);
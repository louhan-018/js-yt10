// *****************CONVERSION*****************

let score = "Louhan12"

// console.log(typeof score);
// console.log(typeof (score));

let valInNum = Number(score)
console.log(typeof valInNum);
console.log(valInNum);

/*

1. "33" => 33
2. "33xyz" or "omm" => NaN
3. null => 0
4. boolean (true => 1 & false => 0)

*/

let isActive = null
let booleanisActive = Boolean(isActive)

// console.log(booleanisActive);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true
// null => false

let Num = 35
let stringNum = String(Num)
// console.log(typeof stringNum);
// console.log(stringNum);

// ***********************Operations*************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Omm"

let str3 = str1 + str2
// console.log(str3);

// console.log(1 + 2);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

// console.log(3 + 4 * 6 % 3); // not a proper way so use proper parenthesis for readebility
// console.log(+true);
// console.log(+"");

let num1, num2, num3 
num1 = num2 = num3 = 2 + 3

let gameCnt = 50
// gameCnt++;
++gameCnt;
console.log(gameCnt);


// console.log(gameCnt++);
// console.log(++gameCnt);


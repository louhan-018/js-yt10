const accountId = 124067
let accountEmail = "louhan@google.com"
var accountPwd = "2005"
accountCity = "Balasore"
let accountState;

// accountId = 7   // in 'const' changes are not allowed.
accountEmail = "omm@gmail.com"
accountPwd = "0506"
accountCity = "bbsr"

/*
    prefer not to use 'var'
    bcz of issue in block scope and functioal scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPwd, accountCity, accountState])

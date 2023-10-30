const accountId = 14567
let accountEmail = "usman@gmail.com"
var accountPassword = "123456yh"
accountCity = "Bangalore"
let accountState

//accountId = 2
accountEmail = "something@gmail.com"
accountCity = "Washington"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.log(accountEmail);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
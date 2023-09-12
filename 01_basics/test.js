const accountId = 144553;
let accountEmail = "sanddep@sandeep.com";
var accountPassword = "12345";
let accountCity = "Jaipur";
accountState = "Rajasthan";
let accountCountry;

//accountId = 2; //not allowed as accountId is constant
accountEmail = "sandeep@nyc.edu"

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState, accountCountry]);

/* 
Prefer not to use var keyword due to issues in block scope and functional scope
*/
const accountId = 687545
let accountEmail = "som@google.com"
var accountPassword = "6789"
accountCity = "Jaipur"

// accountId = 3  not allowed
accountEmail = "trd@.com"
accountPassword = "2416"
accountCity = "Kolkata"
let accountState;

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
bcoz of issue in block scope
and functional scope
*/
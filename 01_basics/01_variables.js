const accountId = 144553
let accoutEmail = "jamal@google.com"
var accountPassword = "98765"
accountCity = "Nawabshah"
let accounState;

// accountId = 2 //const can not be changed

accoutEmail = "hc@hc.com"
accountPassword = "212223"
accountCity = "karachi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scrope and functional scope
*/

console.table([accountId, accoutEmail, accountPassword, accountCity, accounState])
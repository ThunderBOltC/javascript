const accountId = 14553
let accoutEmail = "chandon1072@gmail.com"
//accountId = 4//not allowed
console.log(accountId)
var accountPass = "abcd"
accountCity = "dhaka"
let cyd
console.table([accountId, accountPass, accoutEmail, accountCity,cyd])
/*
never use var only use let
*/
console.log(3 + 2)
let name = "chandan"
let age = 23
let isLogged = false
let ageF 
console.table([name, age, isLogged, ageF])
console.log(typeof age)

//datatype conversions

let score = "455"
console.log(typeof score)

let converted = score
console.log(typeof converted)
let faka= "not faka"
converted = Boolean(faka)
console.log(converted)

//string to number conversion problem

// ********* operations *************//
console.log(2 + 2);
let str1 = "chandan"
let str2 = " hembrom"
let str3
str3 = str1 + str2
console.log(str3)
console.log("1" + 2 + 2) //122
console.log(2 + 2 + "1") //41
console.log("1"+(2+2))
console.log(+true);

let num1, num2, num3
num1 = num2 = num3 = 10 + 7
console.table([num1, num2, num3])
let gameCounter = 100;
gameCounter++
console.log(gameCounter++);//101
console.log(++gameCounter);//103
console.log(gameCounter)//103

//** comparison of datatypes ****//

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

//* === strict check ***//
console.log("2" === 2); //cause the datatypes are different


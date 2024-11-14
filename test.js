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


// primitive and non-primitive //

// 7type of primitives( called by value)

// String, Number, Boolean, null, undefined, Symbol, BigInt

//Non primitive (reference type)
// arrays, objects, Functions,


const id = Symbol('123')
const anotherId = Symbol('1234')
console.log(id === anotherId); //will be false
const bigNumber = 56166165465461616;
const heros = ["deadpool", "wolvarine", "22"];
let myObj = {
    name: "hitesh",
    age: "22",
}

let obj2 = {
    name: "chandan",
    age: "23",
}
const myFunction = function () {
    console.log(myObj);
}
console.log(typeof myFunction)// functions
console.log(typeof myObj) //object
console.log(obj2)

//        Memory alloaction in js //

// stack(Primitive) and heap memory(nonPrimitive)

let myname = "thunderboltc" // this will be stored in stack

let anotheName = myname
anotherName = "chandan"
console.log(myname); // not changed cause there was a copy made for the anotherName

let student = {
    email: "student12@gmail.com",
    password: "admin"

}
let student2 = student
student2.password = "amarachewater" //this will change the student as the memory reference was copied
//heap e sudhu reference jabe
console.log(student);


//    ****** String ***********//
const Name = "thunderboltc"
const repocount = 50
console.log(Name+repocount);
console.log(`hello my name is ${Name} and my repository is ${repocount}`);
const gameName = new String('LUDO')
console.log(gameName.length) //length will be 4
console.log(gameName.toLowerCase()); //ludo
console.log(gameName.charAt(2)) //D
console.log(Name.substring(0, 5))
console.log(Name.substring(-9, 6));// minus will be 0 automatically, thunde
let trimmer = "   abcdefghijklmnopqrstuvwxyz  "
console.log(trimmer);
console.log(trimmer.trim());// white space in both end will vanish
const url = "https://chandan%20hembrom.com"
console.log(url)


console.log(url.replace('%20', '-'));

// **************** Number ***********//
const mark = 400
const balance = new Number(112100.0394324329)
console.log(balance.toFixed(2))

const anothernumber = 3781.564656;
console.log(anothernumber.toPrecision(5)) 
console.log(anothernumber.toPrecision(3));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))


// ********* MATHs **************//

console.log(Math.PI.toFixed(4)); //3.1416
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)) //5
console.log(`minimum value ${ Math.min(4, 5, 6, 7, 4, 3)}`);

console.log(Math.random()+100);

const min = 1
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))


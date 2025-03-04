// let vs const
let number: number = 5;
number = 10;


//const - ne mogat da budat prezapisvani za razlika ot let
const message: string = 'Welcome'

//Komentar String
let welcomeMessage: string = "Hello, all!";
let test: string = "Ivan";

let welcomeMessageLenght: number = welcomeMessage.length;


//string interpolation
let  welcomeMessageDetails: string = 'My welocme message length is ${welcomeMessageLength}';
let userWelocmeMessage: string = 'Welcome, ${test}';


//Number

let firstNumber: number = 5;
let secondNumber: number = 10;

//Number math operations

let add: number = secondNumber + firstNumber;
let substract: number = secondNumber - firstNumber;
let multiply: number = secondNumber * firstNumber;
let divide: number = secondNumber / firstNumber;

//Boolean (true/false)

let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let  isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber  <= secondNumber;

console.log("isGreaterOrEqual", isGreaterOrEqual);
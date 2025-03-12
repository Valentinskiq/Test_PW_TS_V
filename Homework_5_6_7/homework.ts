// Exercise 1: Check if a number is even or odd
// Step 1: Declare a variable `num` and assign any number to it.
// Step 2: Declare a variable `isEven` and use a logical expression to check if `num` is even.
// Step 3: Log the result

let numberHomework: number = 5;
let isEvenHomework: string;

if (numberHomework % 2 === 0) {
  console.log(`The number ${numberHomework} is even`);
} else {
  console.log(`The number ${numberHomework} is odd`);
}

// Exercise 2: Check if a string has more than 10 characters
// Step 1: Declare a variable `text` and assign any string to it.
// Step 2: Declare a variable `isLong` and check if the length of `text` is greater than 10.
// Step 3: Log the result

let textHome: string = "Free text";
let isLong: number = textHome.length;
if (isLong > 10) {
  console.log(`The text lenght is greather than 10`);
} else {
  console.log(`The text lenght is not greater  than  10`);
}

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable `number` and assign any number to it.
// Step 2: Declare a variable `isPositive` and check if `number` is greater than 0.
// Step 3: Log the result

let anyNumber: number = 15;
let isPositiveHome: boolean = anyNumber > 10;
if ((isPositiveHome = true)) {
  console.log(`The number ${anyNumber} is greater than 0`);
} else {
  console.log(`The number ${anyNumber} is not greater than 0`);
}

// Exercise 4: Determine if a number is negative or zero
// Step 1: Declare a variable `numCheck` and assign any number to it.
// Step 2: Declare a variable `isNonPositive` and check if `numCheck` is less than or equal to 0.
// Step 3: Log the result

let numCheckHomework: number = 21;
let isNonPositiveHomework: boolean = numCheckHomework <= 0;
if ((isNonPositiveHomework = false)) {
  console.log(`The number ${numCheckHomework} is less or equal to 0`);
} else {
  console.log(`The number ${numCheckHomework} is not less or equal to 0`);
}

// Exercise 5: Check if a string is empty
// Step 1: Declare a variable `message` and assign any string to it.
// Step 2: Declare a variable `isEmpty` and check if `message` is an empty string.
// Step 3: Log the result

let messageHome: string = "My homework";
let isEmpty: number = messageHome.length;
if ((isEmpty = 0)) {
  console.log(`${messageHome} is empty string`);
} else {
  console.log(`${messageHome} is not empty string.`);
}

// Exercise 6: Determine if a number is within a range (10 to 100 inclusive)
// Step 1: Declare a variable `rangeNumber` and assign any number to it.
// Step 2: Declare a variable `isInRange` and check if `rangeNumber` is between 10 and 100 (inclusive).
// Step 3: Log the result

let rangeNumberHome: number = 432;
let isInRange: boolean = rangeNumberHome >= 10 && rangeNumberHome >= 100;
if ((isInRange = false)) {
  console.log(`The number ${rangeNumberHome} is between 10 and 100`);
} else {
  console.log(`The number ${rangeNumberHome} is not between 10 and 100`);
}

// Exercise 7: Check if a number is either 0 or 100
// Step 1: Declare a variable `specialNumber` and assign any number to it.
// Step 2: Declare a variable `isZeroOrHundred` and check if `specialNumber` is either 0 or 100.
// Step 3: Log the result

let specialNumberHome: number = 543;
let isZeroOrHundredHome: boolean =
  specialNumberHome == 0 || specialNumberHome == 100;
if ((isZeroOrHundredHome = false)) {
  console.log(`The number ${specialNumberHome} is either 0 or 100`);
} else {
  console.log(`The number ${specialNumberHome} is not either 0 or 100`);
}

// Exercise 8: Verify if a boolean value is true
// Step 1: Declare a variable `flag` and assign a boolean value.
// Step 2: Declare a variable `isTrue` and check if `flag` is true.
// Step 3: Log the result

let flag: boolean = true;
let isTrue: boolean = flag === true;
if (isTrue === false) {
  console.log(`The flag is false`);
} else {
  console.log(`The flag is true`);
}

// Exercise 9: Check if a number is odd and greater than 50
// Step 1: Declare a variable `oddCheck` and assign any number to it.
// Step 2: Declare a variable `isOddAndLarge` and check if `oddCheck` is odd and greater than 50.
// Step 3: Log the result

let oddCheck: number = 23;
let isOddAndLargeHome: boolean = oddCheck % 2 !== 0 && oddCheck > 50;
if (isOddAndLargeHome === true) {
  console.log(`The number ${oddCheck} is even and greater than 50.`);
} else {
  console.log(`The number ${oddCheck} is either odd or not greater than 50.`);
}

// Exercise 10: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable `word` and assign any string to it.
// Step 2: Declare a variable `startsWithA` and check if `word` starts with 'A'.
// Step 3: Log the result

let wordHome: string = "apple";

if (wordHome.startsWith("a")) {
  console.log("The string starts with 'a'.");
} else {
  console.log("The string does not start with 'a'.");
}

//                                                             Homework: Arrays & Functions Lecture 6

// 1.	 Create an array of strings and add a new element at the end of the array. Log the result

let myArray: string[] = ["Sofia", "Burgas", "Vratsa", "Pleven", "Varna"];
myArray.push("Plovdiv");
console.log(myArray);

// 2.	Create an array of numbers and remove the first element from the array. Log the result.
let myArrayNumber: number[] = [1, 2, 3, 4, 5];
myArrayNumber.shift();
console.log(myArrayNumber);

//3.     Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.

let arrayNumber: number[] = [4, 6, 8, 10];
let multiplyArrayNumber: number[] = arrayNumber.map((number) => number * 2);
console.log(multiplyArrayNumber);

// 4.	 Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.

let arrayExer4: number[] = [3, 7, 1, 9, 12, 4];
let greatherThan5: number[] = arrayExer4.filter((number) => number > 5);
console.log(greatherThan5);

// 5.	Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.

let myArray2: number[] = [9, 3, 7, 2, 8, 5];
let sortedArray: number[] = myArray2.sort((a, b) => a - b);
console.log(sortedArray); // I have a big problem with this type of method and i use a chatgpt.

//6.	Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.

let newMyArray = myArray.slice(0, 3);
console.log(newMyArray); // here i the town from exercise 1

// 7.	Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.

let exerciseSeven: string[] = ["car", "bike", "bus", "train", "boat"];
let removed = exerciseSeven.splice(1, 2);
// console.log(removed);
console.log(exerciseSeven);

// 8.	Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.
function findLargest(a: number = 10, b: number = 12, c: number = 5): number {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

const largest1 = findLargest();
console.log("The largest number is:", largest1);

//9.	Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and
// convert to centimeters. Log the result with default parameter and with passed parameter.

function convertToCentimeters(inches: number): number {
  return inches * 2.54;
}

console.log(`The default value is ${convertToCentimeters(50)}cm`);
// тук имах огромна нужда от помощ от интернет..

// 10.	Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.

// function  calculateArea(
//     width : number,
//     height?:number,
//  ): number {
//     if (height === undefined) {
//         console.log (`The shape is a square`)

//     } else {
//         console. log(`The shape is not square`)
//         return width*height;
//     }
//  }
//     console.log(calculateArea(10));
//     console.log(calculateArea(21,34));

//                                                           Homework from Lecture 7 Interfaces and Objects

// 1.   Create a TypeScript interface named Person that represents a
// person with the following properties:name (string)
// • lastName (string)
// • age (number)
// • email (string)
// • phoneNumber (number)

interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
}

// // 2. Create a TypeScript interface named PersonInfo that
// Extends Person type from the previous exercise and add the
// following properties:
// • country (optional string property)
// • greeting (optional method that return welcome message)

interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
}

// 3. Create an object of type Person using the interface from Exercise 1.
// Declare a variable person1 of type Person.

const person: Person = {
  name: "Angel",
  lastName: "Andrianov",
  age: 22,
  email: "testov@gmail.com",
  phoneNumber: 897979797,
};

//4. 4. Create an object of type PersonInfo using the interface from
// Exercise 2. Declare a variable person2 of type PersonInfo

const person2: PersonInfo = {
  name: "Ivan",
  lastName: "Angelov",
  age: 21,
  email: "testov2@gmail.com",
  phoneNumber: 3131231,
  country: "Sofia",
  greeting: () => "Welcome!",
};
/// Помогна ми чат гпт за () =>. Това често ме бърка.

// Exercise 25: Check if a number is divisible by both 3 and 5
// Декларирай променлива num и присвой произволно число.
// Декларирай isDivisible и провери дали числото се дели едновременно на 3 и 5.
// Логни резултата.

let num1: number = 51;
let isDivisible: number;
if (num1 % 3 === 0 && num1 % 5 === 0) {
  console.log(`The number ${num1} is divisible by both 3 and 5`);
} else {
  console.log(`The number ${num1} is not divisble by both 3 and`);
}

// Exercise 26: Convert a string to uppercase
// Декларирай променлива text и присвой произволен текст.
// Декларирай upperText и конвертирай text в главни букви.
// Логни резултата.

let text: string = "welcome";
let upperText: string = text.toUpperCase();

console.log(upperText);

// Exercise 27: Reverse a string
// Декларирай originalText със стойност по избор.
// Използвай методи като split(), reverse() и join(), за да обърнеш текста.
// Логни резултата.

let reverseTest: string = "Exercise from ChatGPT";
let splitUse: string = reverseTest.split("ChatGPT");
console.log(splitUse);
// let reversUse: string = `${reverseTest.reverse()}`;

// Exercise 28: Sum all numbers in an array
// Декларирай масив numbers с произволни стойности.
// Използвай reduce(), за да намериш сумата на числата.
// Логни резултата.

let number28: number[] = [21, 55, 66, 77, 88];
let reduceUse: number = number28.reduce();

console.log(reduceUse);

// Exercise 29: Find the longest word in an array
// Декларирай масив words със списък от думи.
// Намери и върни най-дългата дума.
// Логни резултата.

// Exercise 30: Count vowels in a string
// Декларирай sentence с произволен текст.
// Използвай методи като split() и filter(), за да броиш гласните букви (a, e, i, o, u).
// Логни резултата.

// Exercise 31: Remove duplicates from an array
// Декларирай масив items с повтарящи се елементи.
// Използвай new Set() или filter() + indexOf(), за да премахнеш дубликатите.
// Логни резултата.

// Exercise 32: Generate a random number between 1 and 100
// Използвай Math.random() и Math.floor(), за да генерираш произволно число между 1 и 100.
// Логни резултата.

// Exercise 33: Check if a number is a prime number
// Напиши функция isPrime(num), която проверява дали дадено число е просто.
// Върни true, ако е просто, и false, ако не е.
// Логни резултата за няколко примера.

// Exercise 34: Convert Celsius to Fahrenheit
// Напиши функция convertToFahrenheit(celsius), която преобразува градуси Целзий в Фаренхайт.
// Формулата е: F = (C * 9/5) + 32.
// Логни резултата.

// Exercise 35: Merge two arrays and remove duplicates
// Декларирай два масива с числа.
// Обедини ги с concat() или spread operator.
// Премахни дубликатите с new Set().
// Логни резултата.

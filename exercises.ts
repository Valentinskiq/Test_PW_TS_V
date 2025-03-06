// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string
// Step Two: Declare an object "country" with properties following "Country" interface
// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it

interface Country {
  name: string;
  capital: string;
  population: number;
  language: string;
}

const firstCountry: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  population: 7000000,
  language: "Bulgarian",
};

const secondCountry: Country = {
  name: "Italy",
  capital: "Rome",
  population: 59000000,
  language: "Italian",
};

function displayCountryDetails(countryObj: Country) {
  return `The capital  of ${countryObj.name}  is ${countryObj.capital}. The official language is
   ${countryObj.language} and population  of  ${countryObj.population} people`;
}
const detailsAboutFirstCountry = displayCountryDetails(firstCountry);
const detailsAboutSecondCountry = displayCountryDetails(secondCountry);
console.log(detailsAboutFirstCountry);
console.log(detailsAboutSecondCountry);

//

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number

interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"

const studentOne: Student = {
  id: 1,
  name: "Pesho",
  age: 20,
  grade: 6,
};

const studentTwo = {
  id: 1,
  name: "Tosho",
  age: 22,
  grade: 5,
};

const studentThree = {
  id: 1,
  name: "Ivan",
  age: 25,
  grade: 3,
};

// Step Three: Declare array "students" with objects of type "Student"

let students: Student[] = [studentOne, studentTwo, studentThree];
console.log("students", students);

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result

function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}

//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending

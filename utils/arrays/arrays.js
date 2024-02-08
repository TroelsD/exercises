"use strict";

// let letters = ["a", "b",  "c", "d", "e", "f", "g", "h"];

// console.log (letters[4]);

// let newarr = letters;
// newarr [4] = "*";

// console.log(letters [4]);

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// people.pop();
// console.log(result);
// console.log(people);

// result = people.push("Neville");
// console.log(result);
// console.log(people);

// result = people.push("Luna");
// console.log(result);
// console.log(people);

// result = people.slice(1,3);
// console.log(result);
// console.log(people);

// result = people.splice(1,0,"Cho");
// console.log(result);
// console.log(people);

// people[2] = "Ginny";
// console.log(result);
// console.log(people);

// result = people.push("Fred", "George");
// console.log(result);
// console.log(people);

// result = people.indexOf("Fred");
// console.log(result);
// console.log(people);

// result = people.splice(result,1);
// console.log(result);
// console.log(people);

// const str = "abcdefghjklmn";
// const arr1 = str.split("");
// console.log(str, arr1);

// const str = "abcdefghijklmn";
// const arr2 = Array.from(str);
// console.log(str, arr2);

// function greeting(firstName) {
//     return `Hello ${firstName}`
// }
// const sayHi = greeting;
// console.log(sayHi("Troels"));

function hire ( person ) {
    person.hired = true;
}

function fire ( person ) {
    person.hired = false;
}

function fireOrHire ( action, person ) {
    action ( person );
}

const person3 = {
    firstName: "Harry",
    lastName:  "Potter",
    hired: false,
};

const person4 = {
    firstName: "Fred",
    lastName:  "Weasley",
    hired: false,
};


fireOrHire ( hire , person4 );

fireOrHire ( fire , person3 );

console.log(person3)
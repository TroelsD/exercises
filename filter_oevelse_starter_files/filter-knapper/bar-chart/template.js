"use strict";

// const humanName = "Peter";
// const animalType = "cat";
// const animalName = "Mandu";
// console.log(`My name is ${humanName}, Ì have a ${animalType} named ${animalName}.`);

// const theName = "Bobby";
// const len = theName.length;

// console.log(`${theName} is ${len} characters long`);

// const theName = "Albus Percival Wulfric Brian Dumbledore";
// const len = theName.length;
// console.log(len); //viser antal tegn i navnet inkl. mellemrum
// console.log (theName[2]);
// console.log (theName[6]);
// console.log(theName.indexOf("D"));

// const fullName = "Troels Dankert Johansen";
// const firstName = fullName.substring(0,6);
// console.log (`First name: ${firstName}`);

const theName = "Albus Percival Wulfric Brian Dumbledore";
const firstName = theName.substring(0,5);
console.log ("First name: " + firstName);
const lastName = theName.substring(29,39).trim();
console.log ("Last name: " + lastName)


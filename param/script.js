"use strict";

const myName = "Frankie";
const animalName = "Juan";
const animalType = "a leguana";

sayHello(myName);
function sayHello(myName) 
{
console.log(`Hello ${myName}`);
}

presentPet(myName, animalName, animalType);
function presentPet(myName, animalName, animalType) {

console.log(`Hello ${myName} I have ${animalType} called ${animalName}`);
}


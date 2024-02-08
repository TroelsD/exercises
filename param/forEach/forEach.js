"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];

function sayHello (person) {
    console.log(`Hello $(person)`);
}

function testParams ( a, b, c, d ) {
    console.log(`a: ${a}, b. $ {b}, c: ${c}, d: ${d}`);
}

people.forEach ( testParams );
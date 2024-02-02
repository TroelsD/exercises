"use strict"; 

// function greeting(firstName) {

//     return `Hello ${firstName}`
// }
// const txt = `Greeting is ${greeting("Troels")}`;
// console.log(txt);

function udregnArealRektangel(lenght,width) {
    let area = lenght * width;
    return area;
}
console.log(udregnArealRektangel(500,200))

function convertM2ToFt2(sqMeter, sqFeet = 10.77) {
    let fromM2toFt2 = sqMeter * sqFeet;
    return  fromM2toFt2;
}
console.log(convertM2ToFt2(2));

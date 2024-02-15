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

// const theName = "Albus Percival Wulfric Brian Dumbledore";
// const firstName = theName.substring(0,5);
// console.log ("First name: " + firstName);
// const lastName = theName.substring(29,39).trim();
// console.log ("Last name: " + lastName)

// document.querySelector("button").addEventListener("click", btn_klik);
// function btn_klik() {
//     document.querySelector("#ball").addEventListener("animationEnd", animationIterateAndEnd);
//     document.querySelector("#ball").addEventListener("animationiteration", animationIterateAndEnd);

//   document.querySelector("ball").classList.add("ani");
//   console.log("btn_klik", btn_klik);
// }

// function animationIterateAndEnd(evt) {
//   console.log("animationIterateAndEnd", evt.type);
//  { if (evt.type === "animationEnd") 
//     document.querySelector("ball").classList.remove("ani");
//   }
// }

document.querySelector("button").addEventListener("click", btnKlik);

function btnKlik() {
  document
    .querySelector("#ball")
    .addEventListener("animationEnd", animationIterationANDEnd);
  console.log("btnKlik");

  document
    .querySelector("#ball")
    .addEventListener("animationIteration", animationIterationANDEnd);
  document.querySelector("#ball").classList.add("ani");
}

function animationIterationANDEnd(evt) {
  console.log("animationIterationANDEnd", evt.type);
    if (evt.type === "animationEnd") {
      document.querySelector("#ball").classList.remove("ani");
    }
}
  
  

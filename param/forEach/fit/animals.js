"use strict";

const animals = [{
    name: "Mandu",
    type: "cat"
},
{
    name: "Mia",
    type: "cat"
},
{
    name: "Leeloo",
    type: "dog"
},
{
    name: "Scoobydoo",
    type: "dog"
},
];

function isCat ( animal ) {
    if ( animal.type === "cat" ){
        return true;
    }
    else
    {
        return false;
    }
}

function isDog ( animal ) {
    if ( animal.type === "dog" ){
        return true;
    }
    else
    {
        return false;
    }
}

function all ( animals ) {
    return true;
}

function none ( animals ) {
    return false; 
}

let result = animals.filter(isDog);
console.log(result);

animals.filter ( all );
animals.filter ( none );
animals.filter ( isDog );
 

const onlyDogs = animals.filter( isDog );

console.log(animals.filter(isDog));


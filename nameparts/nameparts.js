"use strict";

const fullName = "Peter Heronimous Lind";

const firstName = fullName.substring(0,fullName.indexOf(" "));
console.log ("First name: "+ firstName);

const middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" "));
console.log ("Middle name: " + middleName);

const lastName = fullName.substring(fullName.lastIndexOf(" "));
console.log ("Last name: " + lastName);
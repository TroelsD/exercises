"use strict";

const texts = {

de: {
    texts: [
        {text: "das Bot", location: ".header"},
        {text: "das Ro-bot", location: ".footer"},
    ],
},
da: {
texts: [
    {
        text: "Båden", location: ".header"
    },
    {
        text: "Robotten", location: ".footer"
    },
]

}
}
let locale = "de";
console.log(texts[locale].texts[0].text);

texts[locale].texts.forEach((each) => {
    console.log(each);}
);
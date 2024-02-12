"use strict";
const list = document.querySelector("ul");
const cueArr = [];
setInterval(generateBars, 1000);

function generateBars()
{
    cueArr.push(getRandoNum());
    // console.log(cueArr);

    document.querySelectorAll("li").forEach((li) => {
        li.style.setProperty("--height", cueArr[cueArr.length - 1]);
    });
}

function getRandoNum() {
    return  Math.round(Math.random() * 100);
}


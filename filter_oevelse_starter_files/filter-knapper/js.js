"use strict";

document.querySelectorAll("button").forEach((button) => {
button.addEventListener("click", btnFilterAddEvtListener);
});

function btnFilterAddEvtListener(evt){
    console.log(evt.currentTarget.dataset.filter);
}

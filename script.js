`use strict`;

const button = document.getElementById("validation");
const input = document.getElementById("imputusr");
const ul = document.querySelector("ul");
let li;

stl();

function stl(){
document.body.style.backgroundColor = "#bbd2e1";
document.body.style.fontFamily = "Lobster";
}

function inputValueLength() {
    return input.value.length;
}

function restartInput() {
    input.value = "";
}


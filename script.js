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

function createLi() {
    li = document.createElement("li");
}

function CapitalizeText() {
    return input.value[0].toUpperCase() + input.value.slice(1, inputValueLength()).toLowerCase();
}

function textToLi() {
    li.append(document.createTextNode(CapitalizeText()));
}

function listToUl() {
    ul.insertAdjacentElement("beforeend", li);
}

function listInUl() {
    createLi();
    textToLi();
    listToUl();
    restartInput();
}


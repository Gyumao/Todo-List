`use strict`;

const button = document.getElementById("validation");
const input = document.getElementById("imputusr");
const ul = document.querySelector("ul");
let li;

addStl();

function addStl(){
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

function recallFunListInUl() {
    createLi();
    textToLi();
    listToUl();
    restartInput();
    recallFunRemovesButton();
}

function createRemovesButton() {
    let removesButton = document.createElement("delete");
    let removesButtonIcon = document.createTextNode("\u00D7");
    removesButton.className = "removes";
    removesButton.append(removesButtonIcon);
    li.append(removesButton);
}

function removesLi() {
    let del = document.getElementsByClassName("removes");
    let list;
    for (let i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                list  = this.parentElement;
                list.remove();
        };
    }
}

function recallFunRemovesButton() {
    createRemovesButton();
    removesLi();
}

function addListAfterClick() {
    if (inputValueLength() > 0) {
        recallFunListInUl();
    }
}

function addListAfterKeypress(action) {
    if (inputValueLength() > 0 && action.keyCode === 13) {
        recallFunListInUl();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
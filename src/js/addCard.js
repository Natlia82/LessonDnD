/******добавление элемента*****/
import InsertLocalStore from './localStore';

export default function InsertCard(i, textCard) {
    const divDelete = document.createElement('div');
    divDelete.classList.add('close');
    divDelete.classList.add('deleteLi');
    divDelete.classList.add('displayNone');
    const li = document.createElement('li');
    const text = textCard;
    li.className = 'tasks__item';
    li.draggable = true;
    li.textContent = text;
    li.insertAdjacentElement('beforeend', divDelete)
    let elem = document.querySelectorAll('.tasks__list')[i];
    elem.appendChild(li);
}

function cliki(i) {
    InsertCard(i, document.getElementsByClassName('textNew')[i].value);
    togleTextarea(i);
    removeAddButton(i);
    InsertLocalStore(i);
}


function removeAddButton(i) {
    const buttonAdd = document.querySelectorAll('.add_card')[i];
    buttonAdd.classList.toggle('displayNone');
    const AddCard = document.querySelectorAll('.add')[i];
    AddCard.classList.toggle('displayNone');
    const canselAdd = document.querySelectorAll('.canselAdd')[i];
    canselAdd.classList.toggle('displayNone');
}

function togleTextarea(i) {
    // console.log(i);
    const textCuntentNew = document.getElementsByClassName("textCuntentNew");
    document.getElementsByClassName('textNew')[i].value = "";
    textCuntentNew[i].classList.toggle("displayNone");
}

function addCard(i) {

    togleTextarea(i);
    removeAddButton(i);
}

const butAdd = document.getElementsByClassName('add_card');
for (let i = 0; i < butAdd.length; i++) {
    butAdd[i].addEventListener('click', (e) => {
        //  console.log(e.target.parentNode);
        addCard(i);
    });
}


const but = document.querySelectorAll('.add');
for (let i = 0; i < but.length; i++) {
    but[i].addEventListener("click", (e) => {
        cliki(i);
    });
}


const canselAdd = document.querySelectorAll('.canselAdd');
for (let i = 0; i < canselAdd.length; i++)
    canselAdd[i].addEventListener("click", (e) => {
        removeAddButton(i);
        togleTextarea(i);
    });
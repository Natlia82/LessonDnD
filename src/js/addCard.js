/******добавление элемента*****/
function cliki() {
    const li = document.createElement('li');
    const text = document.getElementById('text').value;
    li.className = 'tasks__item';
    li.draggable = true;
    li.textContent = text;

    let elem = document.querySelector('.tasks__list');
    elem.appendChild(li);
    togleTextarea();
    removeAddButton();
}

function removeAddButton() {
    const buttonAdd = document.querySelector('.add_card');
    buttonAdd.classList.toggle('displayNone');
    const AddCard = document.querySelector('.add');
    AddCard.classList.toggle('displayNone');
    const canselAdd = document.querySelector('.canselAdd');
    canselAdd.classList.toggle('displayNone');
}

function togleTextarea() {
    const textCuntentNew = document.getElementById("textCuntentNew");
    document.getElementById('text').value = "";
    textCuntentNew.classList.toggle("displayNone");
}

function addCard() {
    togleTextarea();
    removeAddButton();
}

const butAdd = document.querySelector('.add_card');
butAdd.addEventListener('click', () => {
    addCard();
});

const but = document.querySelector('.add');
but.addEventListener("click", (e) => {
    cliki();
});

const canselAdd = document.querySelector('.canselAdd');
canselAdd.addEventListener("click", (e) => {
    removeAddButton();
    togleTextarea();
});
/******добавление элемента*****/

/*
const but = document.querySelector('.add');
but.addEventListener("click", cliki);

function cliki() {
    const li = document.createElement('li');
    li.className = 'tasks__item';
    li.draggable = true;
    li.textContent = 'новый элемент';

    let elem = document.querySelector('.tasks__list');
    console.log(elem);
    elem.appendChild(li);
}
*/
function removeAddButton() {
    const buttonAdd = document.querySelector('.add_card');
    buttonAdd.classList.toggle('displayNone');
    const AddCard = document.querySelector('.add');
    AddCard.classList.toggle('displayNone');
    //  buttonAdd.classList.add('add');
    //  buttonAdd.classList.remove('add_card');
}

function addCard() {
    const li = document.createElement('li');
    li.className = 'tasks__item';
    li.className = 'new_tasks__item';
    li.draggable = true;
    //  li.textContent = 'новый элемент';

    /*создаем элемент для ввода текста*/
    const input = document.createElement("textarea");
    input.maxLength = "100";
    input.classList.add('textNew')

    li.appendChild(input);
    //добавление созданного элемента в контент
    let elem = document.querySelector('.tasks__list');
    //  console.log(elem);
    elem.appendChild(li);
    removeAddButton();
}
const butAdd = document.querySelector('.add_card');
butAdd.addEventListener('click', () => {
    addCard();
});
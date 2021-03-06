/** ****добавление элемента**** */
// import InsertLocalStore from './localStore';

function togleTextarea(i) {
  // console.log(i);
  const textCuntentNew = document.getElementsByClassName('textCuntentNew');
  document.getElementsByClassName('textNew')[i].value = '';
  textCuntentNew[i].classList.toggle('displayNone');
}

function removeAddButton(i) {
  const buttonAdd = document.querySelectorAll('.add_card')[i];
  buttonAdd.classList.toggle('displayNone');
  const AddCard = document.querySelectorAll('.add')[i];
  AddCard.classList.toggle('displayNone');
  const canselAdd = document.querySelectorAll('.canselAdd')[i];
  canselAdd.classList.toggle('displayNone');
}

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
  li.insertAdjacentElement('beforeend', divDelete);
  const elem = document.querySelectorAll('.tasks__list')[i];
  elem.appendChild(li);
}

/** *** */
function AddMassiv(i) {
  const querytasks = document.querySelectorAll('.tasks__list')[i];
  const mass = querytasks.querySelectorAll('.tasks__item');
  const masslocal = [];
  for (let j = 0; j < mass.length; j += 1) {
    masslocal.push(mass[j].textContent);
  }
  return masslocal;
}

function InsertLocalStore(i) {
  const locname = ['Todolist', 'InPogress', 'Done'];
  localStorage.setItem(locname[i], JSON.stringify(AddMassiv(i)));
}
/** *** */
function cliki(i) {
  InsertCard(i, document.getElementsByClassName('textNew')[i].value);
  togleTextarea(i);
  removeAddButton(i);
  InsertLocalStore(i);
}

function addCard(i) {
  togleTextarea(i);
  removeAddButton(i);
}

const butAdd = document.getElementsByClassName('add_card');
for (let i = 0; i < butAdd.length; i += 1) {
  butAdd[i].addEventListener('click', () => {
    //  console.log(e.target.parentNode);
    addCard(i);
  });
}

const but = document.querySelectorAll('.add');
for (let i = 0; i < but.length; i += 1) {
  but[i].addEventListener('click', () => {
    cliki(i);
  });
}

const canselAdd = document.querySelectorAll('.canselAdd');
for (let i = 0; i < canselAdd.length; i += 1) {
  canselAdd[i].addEventListener('click', () => {
    removeAddButton(i);
    togleTextarea(i);
  });
}

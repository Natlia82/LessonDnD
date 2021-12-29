/* let Todolist = ['learn HTML', 'learn CSS', 'learn JavaScript', 'learn PHP', 'stay alive'];
localStorage.setItem('Todolist', JSON.stringify(Todolist)); */
import InsertCard from './addCard';

const Todolist = JSON.parse(localStorage.getItem('Todolist'));
if (Todolist) {
  for (let i = 0; i < Todolist.length; i += 1) {
    InsertCard(0, Todolist[i]);
  }
}

const InPogress = JSON.parse(localStorage.getItem('InPogress'));
if (InPogress) {
  for (let i = 0; i < InPogress.length; i += 1) {
    InsertCard(1, InPogress[i]);
  }
}

const Done = JSON.parse(localStorage.getItem('Done'));
if (Done) {
  for (let i = 0; i < Done.length; i += 1) {
    InsertCard(2, Done[i]);
  }
}

/** чтение */
function AddMassiv(i) {
  const querytasks = document.querySelectorAll('.tasks__list')[i];
  const mass = querytasks.querySelectorAll('.tasks__item');
  const masslocal = [];
  for (let j = 0; j < mass.length; j += 1) {
    masslocal.push(mass[j].textContent);
  }
  return masslocal;
}

// запись
export default function InsertLocalStore(i) {
  const locname = ['Todolist', 'InPogress', 'Done'];
  localStorage.setItem(locname[i], JSON.stringify(AddMassiv(i)));
}

// console.log(AddMassiv(0));

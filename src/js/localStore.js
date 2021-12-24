/*let Todolist = ['learn HTML', 'learn CSS', 'learn JavaScript', 'learn PHP', 'stay alive'];
localStorage.setItem('Todolist', JSON.stringify(Todolist)); */
import InsertCard from './addCard';

let Todolist = JSON.parse(localStorage.getItem("Todolist"));
if (Todolist) {
    for (let i = 0; i < Todolist.length; i++) {

        InsertCard(0, Todolist[i]);
    }
}


let InPogress = JSON.parse(localStorage.getItem("InPogress"));
if (InPogress) {
    for (let i = 0; i < InPogress.length; i++) {
        InsertCard(1, InPogress[i]);
    }
}


let Done = JSON.parse(localStorage.getItem("Done"));
if (Done) {
    for (let i = 0; i < Done.length; i++) {

        InsertCard(2, Done[i]);
    }
}

/**чтение */
function AddMassiv(i) {
    const querytasks = document.querySelectorAll('.tasks__list')[i];
    const mass = querytasks.querySelectorAll('.tasks__item');
    let masslocal = [];
    for (let j = 0; j < mass.length; j++) {
        masslocal.push(mass[j].textContent);
    }
    return masslocal;
}

// запись
export default function InsertLocalStore(i) {
    const locname = ["Todolist", "InPogress", "Done"];
    localStorage.setItem(locname[i], JSON.stringify(AddMassiv(i)));
}

//console.log(AddMassiv(0));
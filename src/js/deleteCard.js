import InsertLocalStore from './localStore';

let cursorCard = document.querySelector('.contener');
cursorCard.addEventListener('mouseover', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.children[0].classList.remove('displayNone');

    }

});
cursorCard.addEventListener('mouseout', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.children[0].classList.add('displayNone');

    }

});

cursorCard.addEventListener('click', (e) => {

    if (e.target.classList.contains('deleteLi')) {
        // e.target.parentNode.remove()
        const n = e.target.parentNode.parentNode.parentNode.getAttribute('data-sevtion');
        console.log(n);
        e.target.parentNode.remove();
        InsertLocalStore(n);
    }

});
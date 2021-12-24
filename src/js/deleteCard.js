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
        console.log(e.target.parentNode.parentNode);
        e.target.parentNode.remove();

        InsertLocalStore(0);
    }

});
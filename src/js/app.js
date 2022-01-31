import InsertLocalStore from './localStore';
const tasksContener = document.querySelector('.contener');
const tasksListElement = document.querySelectorAll('.tasks__list');
const taskElements = tasksContener.querySelectorAll('.tasks__item');

for (let i = 0; i < taskElements.length; i++) {
    taskElements[i].draggable = true;
}


tasksContener.addEventListener('dragstart', (evt) => {
    evt.target.classList.add('selected');
})

tasksContener.addEventListener('dragend', (evt) => {
    evt.target.classList.remove('selected');
});

const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;

    return nextElement;
};

tasksContener.addEventListener('dragover', (evt) => {
    evt.preventDefault();

    const activeElement = tasksContener.querySelector('.selected');
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement &&
        currentElement.classList.contains('tasks__item');

    if (!isMoveable) {
        return;
    }


    // evt.clientY — вертикальная координата курсора в момент,
    // когда сработало событие
    const nextElement = getNextElement(evt.clientY, currentElement);

    // Проверяем, нужно ли менять элементы местами
    if (
        nextElement &&
        activeElement === nextElement.previousElementSibling ||
        activeElement === nextElement
    ) {
        // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
        return;
    }

    currentElement.closest('.tasks__list').insertBefore(activeElement, nextElement);
    //  tasksListElement[1].insertBefore(activeElement, nextElement);
    for (let j = 0; j < 3; j = j + 1) {
        InsertLocalStore(j);
    }

});
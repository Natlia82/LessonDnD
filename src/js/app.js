const elementTasks = document.querySelectorAll('.tasks__list');
for (let i = 0; i < elementTasks.length; i += 1) {
  const tasksListElement = elementTasks[i];
  const taskElements = tasksListElement.querySelectorAll('.tasks__item');

  for (let j = 0; j < taskElements.length; j += 1) {
    taskElements[j].draggable = true;
  }

  tasksListElement.addEventListener('dragstart', (evt) => {
    evt.target.classList.add('selected');
  });

  tasksListElement.addEventListener('dragend', (evt) => {
    evt.target.classList.remove('selected');
  });

  const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement = (cursorPosition < currentElementCenter)
      ? currentElement
      : currentElement.nextElementSibling;

    return nextElement;
  };

  tasksListElement.addEventListener('dragover', (evt) => {
    evt.preventDefault();

    const activeElement = tasksListElement.querySelector('.selected');
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement
            && currentElement.classList.contains('tasks__item');

    if (!isMoveable) {
      return;
    }

    // evt.clientY — вертикальная координата курсора в момент,
    // когда сработало событие
    const nextElement = getNextElement(evt.clientY, currentElement);

    // Проверяем, нужно ли менять элементы местами
    if (
      nextElement
            && (activeElement === nextElement.previousElementSibling
                || activeElement === nextElement)
    ) {
      // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
      return;
    }

    tasksListElement.insertBefore(activeElement, nextElement);
  });
}

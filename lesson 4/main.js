const mainInnerElement = document.querySelector(`.main-inner`);
const mainElements = mainInnerElement.querySelectorAll(`.card`);


for (const task of mainElements) {
  task.draggable = true;
}

mainInnerElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
  })
  
  mainInnerElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
  });

  mainInnerElement.addEventListener(`dragover`, (evt) => {

    evt.preventDefault();
  
   
    const activeElement = mainInnerElement.querySelector(`.selected`);

    const currentElement = evt.target;

    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`card`);
  

    if (!isMoveable) {
      return;
    }
  

    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
  

    mainInnerElement.insertBefore(activeElement, nextElement);
  });
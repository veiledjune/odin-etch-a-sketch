function render(value = 16) {
  const divContainer = document.querySelector('.etch-a-sketch');
  divContainer.textContent = '';
  for (let i = 0; i < value * value; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-cell');
    div.style.setProperty('width', `calc(100% / ${value})`);
    div.style.setProperty('height', `calc(100% / ${value})`);
    div.addEventListener('mouseenter', () => hoverEvents(div));
    divContainer.appendChild(div);
  }
}

function hoverEvents(div) {
  div.style.backgroundColor = 'black';
}

function updateGrid() {
  const updateGridButton = document.querySelector('.change-grid-button');
  updateGridButton.addEventListener('click', () => {
    const userInput = Number(prompt('Update a grid size of up to 100'));
    if (userInput && typeof userInput === 'number' && userInput <= 100)
      render(userInput);
  });
}

updateGrid();
render();

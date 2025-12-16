function render() {
  const divContainer = document.querySelector('.etch-a-sketch');
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-cell');
    divContainer.appendChild(div);
  }
}

render();

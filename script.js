const colorPicker = document.getElementById('colorPicker');
let color = colorPicker.value;
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const sizeValue = document.getElementById('sizeValue');
const gridSizeSlider = document.getElementById('sizeSlider');
const gridContainer = document.getElementById('gridContainer');

const createGrid = (sizeValue) => {
    // Șterge grid-ul existent
    gridContainer.innerHTML = '';

    // Creează un grid cu sizeValue rânduri și sizeValue coloane
    for (let i = 0; i < sizeValue; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < sizeValue; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
};
createGrid(16);
gridSizeSlider.addEventListener('input', () => {
    sizeValue.textContent = gridSizeSlider.value;
})                               
gridSizeSlider.addEventListener('change', () => {
    createGrid(gridSizeSlider.value);
});
colorPicker.addEventListener('change', () => {
    color = colorPicker.value;
});
rainbow.addEventListener('click', () => {
    color = 'rainbow';
});
eraser.addEventListener('click', () => {
    color = 'white';
});
clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});
gridContainer.addEventListener('mousemove', (event) => {
    if (event.target.classList.contains('cell') && event.buttons === 1) {
        const cell = event.target;
        if (color === 'rainbow') {
            cell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            cell.style.backgroundColor = color;
        }
    }
});





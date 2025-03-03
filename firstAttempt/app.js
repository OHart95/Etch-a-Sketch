const submitBtn = document.querySelector('#submitBtn');
const numberInput = document.querySelector('#numberInput');

function getUserInput() {
    return parseInt(numberInput.value, 10);
}

function createFlexGrid(userInput) {
    const grid = document.querySelector('#grid');
    grid.innerHTML = ""; // Clear previous grid

    grid.style.display = "flex";
    grid.style.flexWrap = "wrap"; // Allow wrapping
    grid.style.width = "800px"; // Fixed grid width
    grid.style.height = "800px"; // Fixed grid height

    const cellSize = 800 / userInput; // Ensure perfect fit

    const totalCells = userInput * userInput;
    for (let i = 0; i < totalCells; i++) { 
        const div = document.createElement('div');
        div.classList.add('cell');
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;

        // Add hover event listener
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "lightblue"; // Change color on hover
        });
        grid.appendChild(div);
    }
}

submitBtn.addEventListener('click', () => {
    const userInput = getUserInput();
    createFlexGrid(userInput);
});
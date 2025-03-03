
function getUserResponse () {
    const userResponse = document.querySelector('#userInput').value;
    return parseInt(userResponse,10);
}

//global scope - handle button click event when user submits new number
document.querySelector('#submitBtn').addEventListener('click', function () {

    console.log('button pressed');

    //store user input as variable
    const userResponse = getUserResponse();

    //clear any previous input
    document.querySelector('#grid').innerHTML = "";

    const noOfCells = userResponse * userResponse;
    const gridArea = document.querySelector('#grid');
    const gridWidth = document.querySelector('#grid').offsetWidth;
    const cellSize = gridWidth / userResponse;

    for(let i = 0; i < noOfCells; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;

        div.addEventListener('mousemove', () => {
            div.style.backgroundColor = 'lightblue';
        })

        gridArea.appendChild(div);
    }

});
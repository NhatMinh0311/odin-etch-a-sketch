function createGrid(size) {
    if (size == undefined || size <= 0) size = 16;
    if (size > 100) size = 100;

    index = 0;
    const container = document.querySelector("#container");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.setAttribute("id", `square${index}`);
            row.appendChild(square);

            index++;
        }
        container.appendChild(row);
    }
}

function fillColor(id) {
    if (id === "container") return;
    const selectedSquare = document.querySelector(`#${id}`);
    selectedSquare.style.backgroundColor = randomColor();

}

function deleteGrid() {
    container.innerHTML = "";
}

function randomValue() {
    return Math.floor(Math.random() * 256);
}
function randomColor() {
    return "rgb(" + randomValue() + ", " + randomValue() + ", " + randomValue() + ")"; 
}

createGrid();

const container = document.querySelector("#container");
container.addEventListener("mouseover", (event) => {
    const id = event.target.id;
    fillColor(id);
});

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let newSize = +prompt("How much do you want?", "16");
    console.log(newSize);
    deleteGrid();
    createGrid(newSize);
});

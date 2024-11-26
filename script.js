const container = document.querySelector('#container');

function makeGrid(size) {
    container.textContent = "";
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.style["flex"] = 1;
        row.style["display"] = "flex";
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.style["flex"] = 1;
            cell.style["border"] = "1px solid #ccf";
            cell.addEventListener("mouseenter", () => {
                cell.classList.add("hover");
            })
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

makeGrid(16);

const newGridBtn = document.querySelector("#new-grid");
newGridBtn.addEventListener("click", () => {
    const size = parseInt(prompt("How many squares per side should the new grid have?"))
    makeGrid(size);
});
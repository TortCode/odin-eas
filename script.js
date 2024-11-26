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
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

makeGrid(16)
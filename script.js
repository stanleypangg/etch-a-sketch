let width, length;
width = length = 16;

const button = document.querySelector("button");
button.addEventListener("click", () => {
    do {
        width = prompt("Enter width (limit 100)");
    } while (width > 100)
    do {
        length = prompt("Enter height (limit 100)");
    } while (length > 100)
    container.remove();
    initializeBoard(width, length);
});

let container;

function initializeBoard(width, length) {
    container = document.createElement("div");
    container.className = "container";

    for (let i = 0; i < length; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";

        for (let j = 0; j < width; j++) {
            let div = document.createElement("div");
            div.style.border = "0.5px solid";
            div.style.width = "7px";
            div.style.height = "7px";
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "yellow";
            });
            row.appendChild(div);
        }

        container.appendChild(row);
    }

    document.body.appendChild(container);
}

initializeBoard(width, length);

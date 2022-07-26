const container = document.getElementsByClassName("container")
console.log(container)

const GRID_SIZE = 16

for (let i = 0; i < GRID_SIZE; i++) {
    let row = document.createElement("div")
    row.classList.add("flex")
    container[0].appendChild(row)
    for (let x = 0; x < GRID_SIZE; x++) {
        let rowElement = document.createElement("div")
        rowElement.classList.add("rowElement")
        row.appendChild(rowElement)
    }

}
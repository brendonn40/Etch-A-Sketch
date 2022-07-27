const container = document.getElementsByClassName("container")
const rows = document.getElementsByClassName("rowElement")
const buttons = document.querySelectorAll("button")
console.log(buttons)

let GRID_SIZE = 16
// cria o grid
createGrid(100)
changeElementSize(100)


buttons[1].addEventListener("click",resetGrid)
function createGrid(GRID_SIZE){
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
}
// cria um event listener pra cada elemento do grid
Array.from(rows).forEach((rowItem) => {
    rowItem.addEventListener("mouseover",function(e){
        e.stopPropagation()
        addColor(rowItem)
    })
});
// muda o tamanho dos elementos do grid
function changeElementSize(GRID_SIZE){
    let newSize = calcElementWidth(GRID_SIZE)
    document.documentElement.style.setProperty('--size', newSize);
}


function addColor(rowItem){
    rowItem.classList.add("black")
}

// calcula qual tamanho de cada item do grid pra caber numa area de 480x480
function calcElementWidth(GRID_SIZE){
    return `${((480 **2)/(GRID_SIZE ** 2)) ** 0.5}px`   
}

function resetGrid(){
    for (let i = 0; i < GRID_SIZE; i++) {
        for (const element of rows) {
            if(element.classList.contains("black")){
                element.classList.remove("black")
            }
        } 
    }
}
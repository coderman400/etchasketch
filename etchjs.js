const container = document.createElement("div");
const main = document.querySelector("main");
main.appendChild(container);
container.classList.add("gridcontainer");



//slider
const rightmenu = document.createElement("div");
const slider = document.createElement("input");
main.appendChild(rightmenu);
rightmenu.appendChild(slider);
rightmenu.classList.add("rightmenu")
slider.type = "range";
slider.classList.add("slider");
slider.min="1";
slider.max="50";
slider.value="8";


//decide the grid dimensions
let squareSideLength = 8;

const value = document.createElement("h1");
value.classList.add("value");
rightmenu.appendChild(value);

while(container.firstChild){
    container.removeChild(container.firstChild);
}



let colorwheel = document.getElementsByClassName("colorwheel");
colorChosen=colorwheel[0].value;

colorwheel[0].addEventListener('change',(event)=>{
    colorChosen=colorwheel[0].value;
})

let isHover;

//make an initial grid=================================

frac=100/squareSideLength;
container.style.setProperty('grid-template-columns',`repeat(${squareSideLength},${frac}%)`);
container.style.setProperty('grid-template-rows',`repeat(${squareSideLength},${frac}%)`);

let counter=1;
    let item;
    while(counter<(squareSideLength**2)+1){
        
        item = document.createElement('div');
        container.appendChild(item);
        item.classList.add('grid-square');
        counter++;
}
value.textContent=`${squareSideLength}x${squareSideLength}`;
//initial grid made =================================

const checkHover = document.querySelector("#switch")
console.log("this is checkhover")
console.log(checkHover);

checkHover.addEventListener('input',()=>{
    isHover=checkHover.checked;
    console.log(checkHover.checked);
})

//==============CREATE A GRID WHENEVER SLIDER VALUE IS ADJUSTED=================================



slider.oninput = function() {
    
    console.log("EYY BREAD")
    squareSideLength = this.value;
    //display dimensions
    value.textContent=`${squareSideLength}x${squareSideLength}`;

    //flexibility of grid to adjust size of individual squares according to dimensions of the grid
    frac=100/squareSideLength;
    container.style.setProperty('grid-template-columns',`repeat(${squareSideLength},${frac}%)`);
    container.style.setProperty('grid-template-rows',`repeat(${squareSideLength},${frac}%)`);

    //clear grid
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    //creating n number of grid items and appending to the main container, this makes the grid 
    let counter=1;
    let item;
    while(counter<(squareSideLength**2)+1){
        
        item = document.createElement('div');
        container.appendChild(item);
        item.classList.add('grid-square');
        counter++;
    }

    //on hovering, we change the color of the griditem
    let gridSquares = document.getElementsByClassName("grid-square");
    for (gridSquare of gridSquares) {
      gridSquare.addEventListener("mouseover", (event) => {
        if(isHover==true){
        console.log('hi')
        event.target.style.setProperty('background',colorChosen);
        console.log(colorChosen);
        }
    })
 }
};

//on hovering, we change the color of the griditem

let gridSquares = document.getElementsByClassName("grid-square");
console.log("yo this is gridsquares");
console.log(gridSquares);
for (gridSquare of gridSquares) {
  gridSquare.addEventListener("mouseover", (event) => {
        if(isHover==true){
        console.log('hi')
        event.target.style.setProperty('background',colorChosen);
        console.log(colorChosen);
        }
    })
 }

 //clear button on click clears the grid back to white
 const clearButton = document.getElementById('clear')
 clearButton.addEventListener('click',()=>{
     for (var i = 0 ; i < gridSquares.length; i++) {
            gridSquares[i].style.setProperty('background','white');
     }
          
})





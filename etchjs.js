const container = document.createElement('div');
const main = document.querySelector('main');
main.appendChild(container);
container.classList.add('gridcontainer');



//slider
const rightmenu = document.createElement('div');
const slider = document.createElement('input');
main.appendChild(rightmenu);
rightmenu.appendChild(slider);
rightmenu.classList.add("rightmenu")
slider.type = "range";
slider.classList.add("slider");
slider.min="1";
slider.max="50";
slider.value="8";


//decide the grid dimensions
let noOfSquares = 8;

const value = document.createElement('h1');
value.classList.add('value');
rightmenu.appendChild(value);

while(container.firstChild){
    container.removeChild(container.firstChild);
}



let colorwheel = document.getElementsByClassName('colorwheel');
colorChosen=colorwheel[0].value;

colorwheel[0].addEventListener('change',(event)=>{
    colorChosen=colorwheel[0].value;
})



//make an initial grid=================================

frac=100/noOfSquares;
container.style.setProperty('grid-template-columns',`repeat(${noOfSquares},${frac}%)`);
container.style.setProperty('grid-template-rows',`repeat(${noOfSquares},${frac}%)`);

let counter=1;
    let item;
    while(counter<(noOfSquares**2)+1){
        
        item = document.createElement('div');
        container.appendChild(item);
        item.classList.add('griditem');
        counter++;
}
value.textContent=`${noOfSquares}x${noOfSquares}`;
//initial grid made =================================

const checkHover = document.querySelector("#switch")
console.log(checkHover);

checkHover.addEventListener('input',()=>{
    isHover=checkHover.checked;
    console.log(checkHover.checked)
})

//==============CREATE A GRID WHENEVER SLIDER VALUE IS ADJUSTED=================================



slider.oninput = function() {
    
    console.log("EYY BREAD")
    noOfSquares = this.value;
    //display dimensions
    value.textContent=`${noOfSquares}x${noOfSquares}`;

    //flexibility of grid to adjust size of individual squares according to dimensions of the grid
    frac=100/noOfSquares;
    container.style.setProperty('grid-template-columns',`repeat(${noOfSquares},${frac}%)`);
    container.style.setProperty('grid-template-rows',`repeat(${noOfSquares},${frac}%)`);

    //clear grid
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    //creating n number of grid items and appending to the main container, this makes the grid 
    let counter=1;
    let item;
    while(counter<(noOfSquares**2)+1){
        
        item = document.createElement('div');
        container.appendChild(item);
        item.classList.add('griditem');
        counter++;
    }

    //on hovering, we change the color of the griditem
const griditem = document.getElementsByClassName('griditem');


for (var i = 0 ; i < griditem.length; i++) {
    
    griditem[i].addEventListener('mouseover',(event)=>{
        if(isHover==true){
        console.log('hi')
        event.target.style.setProperty('background',colorChosen);
        console.log(colorChosen);
        }
    })
 }
}
const griditem = document.getElementsByClassName('griditem');

//on hovering, we change the color of the griditem

for (var i = 0 ; i < griditem.length; i++) {
    griditem[i].addEventListener('mouseover',(event)=>{
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
     for (var i = 0 ; i < griditem.length; i++) {
            griditem[i].style.setProperty('background','white');
     }
          
})





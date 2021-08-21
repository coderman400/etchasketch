const container = document.createElement('div');
const main = document.querySelector('main');

main.appendChild(container);
container.classList.add('gridcontainer');
let noOfSquares = 8;
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

const griditem = document.getElementsByClassName('griditem');
for (var i = 0 ; i < griditem.length; i++) {
    griditem[i].addEventListener('mouseover',(event)=>{
        console.log('hi')
        event.target.style.setProperty('background','blue');
    })
 }





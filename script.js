// Your JS goes here
console.log("connected");

document.addEventListener('DOMContentLoaded',()=>{
   makeSquares();
   window.setInterval(changeColor,2000);
    
})

function changeColor () {
    let squares = document.getElementsByTagName('div');
    for (let square of squares) {
    square.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
}
}

function makeSquares(){
    let count = 0;
    while (count < 72) {   
    const square = document.createElement('div');
    document.body.appendChild(square);
    square.style.width = "11.1%";
    square.style.cssFloat= 'left';
    square.style.paddingBottom = '11.1%'
    square.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    
    count ++;
    }
}  




 // const bigSquare = document.createElement('div');
    // document.body.appendChild(bigSquare);
    // bigSquare.style.width = "99.9%";
    // bigSquare.style.cssFloat= 'left';
    // bigSquare.style.paddingBottom = '85%'
    // bigSquare.style.backgroundColor = 'blue';
    // bigSquare.style.position = 'absolute'
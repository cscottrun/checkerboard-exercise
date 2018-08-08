// Your JS goes here
console.log("connected");

document.addEventListener('DOMContentLoaded',()=>{
    const bigSquare = document.createElement('div');
    document.body.appendChild(bigSquare);
    bigSquare.style.width = "99.9%";
    bigSquare.style.cssFloat= 'left';
    bigSquare.style.paddingBottom = '85%'
    bigSquare.style.backgroundColor = 'blue';
    bigSquare.style.position = 'absolute'
    
    let count = 0;
    let opacity = 0;
    while (count < 36) {   
    const square = document.createElement('div');
    document.body.appendChild(square);
    square.style.width = "11.1%";
    square.style.cssFloat= 'left';
    square.style.paddingBottom = '11.1%'
    square.style.backgroundColor = 'aqua';
    square.style.opacity = `${opacity}`;
    
    const pinkSquare = document.createElement('div');
    document.body.appendChild(pinkSquare);
    pinkSquare.style.width = "11.1%";
    pinkSquare.style.cssFloat= 'left';
    pinkSquare.style.paddingBottom = '11.1%'
    pinkSquare.style.backgroundColor = 'fuchsia';
    pinkSquare.style.opacity = `${opacity}`
   
    opacity += 1/36;
    count ++;
    
    }
    
})



// Your JS goes here
console.log("connected");

document.addEventListener('DOMContentLoaded',()=>{
    let count = 0;
    while (count < 72) {   
    const square = document.createElement('div');
    document.body.appendChild(square);
    square.style.width = "11.1%";
    square.style.height= '20 px'; 
    square.style.cssFloat= 'left';
    square.style.paddingBottom = '11.1%'
    square.className = 'blackSquare';
    square.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255} , ${Math.random()*255})`;
   
    count ++;
    
}
    
})



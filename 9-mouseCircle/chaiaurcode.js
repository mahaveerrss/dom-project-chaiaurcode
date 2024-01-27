const cursor = document.querySelector('#cursor');
 

// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array
let randomColor = '';
setInterval(() => {
    
  randomColor = Number(Math.floor(Math.random() * colors.length +1))
}, 1000);

window.addEventListener('mousemove',(e) => {
 const elementWidth =  cursor.clientWidth;
 const elementHeight =  cursor.clientHeight;
   
 
 
 
 
 cursor.style.background  =  colors[randomColor]
  
 console.log();
 
  cursor.style.transform = `translateX(${e.clientX - elementWidth/2}px) translateY(${e.clientY - elementHeight/2}px)`;
  
   
},false
)

 

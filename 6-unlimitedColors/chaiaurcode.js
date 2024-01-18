const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

let starterInterval ;

const starter = function(){
    const hex = '0123456789ABCDEF'
    let randomColor = '#'
    for (let index = 0; index < 6; index++) {
        
        randomColor += hex[Math.floor(Math.random()*hex.length)]
        
    }
      
 

  document.querySelector("body").style.backgroundColor = `${randomColor}`;
   console.log(randomColor);
   

}

startBtn.addEventListener('click',()=>{
    starterInterval = setInterval(starter, 500);
});

stopBtn.addEventListener('click',() => {
  clearInterval(starterInterval)
}
)
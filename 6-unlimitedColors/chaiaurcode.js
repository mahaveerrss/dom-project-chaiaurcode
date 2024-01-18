const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

let starterInterval ;

const starter = function(){
    const randomColor = Math.round(Math.random()*999999)
 

  document.querySelector("body").style.backgroundColor = `#${randomColor}`;
   

}

startBtn.addEventListener('click',()=>{
    starterInterval = setInterval(starter, 500);
});

stopBtn.addEventListener('click',() => {
  clearInterval(starterInterval)
}
)
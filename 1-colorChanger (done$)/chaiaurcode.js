// background selector ;
let background = document.getElementsByTagName("body")[0];

let buttons = document.querySelectorAll(".button");


buttons.forEach((el) => {
    el.addEventListener("click",function (el){
       let id =  el.target.id;
       background.style.background = id;
    })
})





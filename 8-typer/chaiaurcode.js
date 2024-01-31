const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

 let i = 0;

 

 const printer = (wordArray,time) => {
   setInterval(()=>{
type(wordArray)
   },time)
 }
 

function type(words) {

    //  prints every word per 800ms ..
   if(i<words.length){
   typedTextSpan.innerText = words[i]
   

    i++
    if(i == 5){
        i=0
    }
    }
 
  
}

printer(words,1000)
 


function erase() {}

 
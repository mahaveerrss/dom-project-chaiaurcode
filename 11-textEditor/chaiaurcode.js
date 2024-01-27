const input  = document.getElementById('input-field');
const output  = document.getElementById('output-field');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(element => {
    element.addEventListener('click',(e) => {
       
        const pressedBtn = e.target;

        const getTargetClass = pressedBtn.classList[1];
         

         const inputValue = input.value;
         
         const spaceTrim = inputValue.trim()
        const isValid = spaceTrim.length

      if(isValid > 0 ){
       
        
       

        if(getTargetClass === 'uppercase'){

            output.style = 'none'
           

        output.innerText =  inputValue.toUpperCase()
        
        }
    else if(getTargetClass === 'lowercase'){

            output.style = 'none'
             

        output.innerText =  inputValue.toLowerCase()
        
        }

    else if(getTargetClass === 'capitalize'){
            output.style = 'none'
        
            output.innerText =  inputValue 
             output.style.fontStyle = 'capitalize'
        
        }
        
        else   if(getTargetClass === 'bold'){
            
            output.style = 'none'
            
        output.innerText =  inputValue 
         output.style.fontWeight = '700'

        }

        else if(getTargetClass === 'italic'){

            output.style = 'none'
          
          

            output.innerText =  inputValue 
             output.style.fontStyle = 'italic'
        
        }
        else if(getTargetClass === 'underline'){

            output.style = 'none';

            

        output.innerText =  inputValue ;

        output.style.textDecoration = 'underline'
         
        }
 
       }
 
      
       

       
           
      else{
        alert("Enter Value  in Input  ")
      }
      
        
      
    }
    )
});

 
 

 
const url = 'https://api.chucknorris.io/jokes/random';

const displayJoke = document.getElementById('display-joke')
const btn = document.getElementById('getJoke')



btn.addEventListener('click',( ) => {
  
    // 1. call Using  XHR ; (default;)
    callUsingXHR()

    // 2. call using async await
    // callUsingAsyncAwait()

    // 3. call using fetchThen
    // fetchThen()
}
)

// {~~handled~~~} this end point with XMLHttpRequest


function callUsingXHR(){
   const xhr = new XMLHttpRequest;

 
    
    xhr.open('GET',url);
    xhr.send()

    
     xhr.onreadystatechange = function(){

     
     
         
        
        if(this.readyState === 4){
           
            if(xhr.status === 200){

                  const response =  xhr.responseText;
           const responseJson =  JSON.parse(response);
            
           const joke = responseJson.value
           
           
            displayJoke.innerHTML = `<h2>${joke}</h2>`
              
            }

            else{
                alert('Reload Page or Check Internet')
            }
       
        }
         
     }
 
 
}

 

// handle this end point with promises

  function callUsingAsyncAwait(){
  ( async function asfn(){
  try {

    const response = await fetch(url);

    const responseJson = await response.json();

    displayJoke.innerHTML = `<h2>${responseJson.value}</h2>`

  } catch (error) {
    console.log(error);
        
  }
   })()

    
   
   
}

 




// handle the case of race condition

 function fetchThen(){
     const promise = fetch(url);

 promise
 .then((response) => {
   const responseJson = response.json()
    return responseJson
 }
 )
 .then((data) => {
   displayJoke.innerHTML = `<h2>${data.value}</h2>`
 }
 )
.catch((error) => {
  console.log(error);
  
}
)
 }
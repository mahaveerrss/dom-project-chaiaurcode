// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

const url = 'https://randomuser.me/api/';

const userInput = document.querySelector('#user-input');
const userName =  document.querySelector('#name');
const img =  document.querySelector('#img');
const profession =  document.querySelector('#profession');
const userCardDiv =  document.querySelector('#user-card');

userInput.addEventListener('keyup',() => {

  const userInputVal = userInput.value;
 

  const trimedVal = userInputVal.trim()
 
 
    if(trimedVal.length > 0){
       
        
         userCardDiv.style.display = 'flex'
 dataFetcher()
    }

}
)


async function CallApi(url){
  try {
    const response = await fetch(url);
    const responseJson = response.json()
    
    return responseJson
  } catch (error) {
    console.log(error);
    
  }
}

async function dataFetcher(){
    try {
        const data = await CallApi(url);
        img.setAttribute('src',` ${data.results[0].picture.thumbnail}`)
        userName.innerText = ` ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last} `
        
        
        
    } catch (error) {
        
    }
}

 






// You will automatically learn about this and apply in this. ☕️

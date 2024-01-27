const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('.btn');
const img = document.querySelector('#img')

btn.addEventListener('click',() => {
  callApi(url)
}
)

// Function call api
function callApi(url){
    ( async function asfn(){
    try {
  
      const response = await fetch(url);
  
      const responseJson = await response.json();
  
       const dataObj = responseJson[0] ;

       
       
       img.setAttribute( 'src',dataObj.url)
       
       
  
    } catch (error) {
      console.log(error);
          
    }
     })()
  
      
     
     
  }
  
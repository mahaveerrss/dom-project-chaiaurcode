const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  //work on CRUD operation of DOM

  e.preventDefault();

  let titleVal = title.value;  
  let authorVal = author.value;  
  let yearVal = year.value;  

  if(titleVal.trim().length > 0 && authorVal.trim().length > 0 && yearVal.trim().length > 0 && yearVal.trim().length < 5 ){

    createAndUpdate(titleVal,authorVal,yearVal);
    
    title.value = null;
    author.value =null;
    year.value = null;

       
  }
  else{
    alert('Enter Valid Input!')
  }
  
  
  e.preventDefault = false;


});

function createAndUpdate(title,author,year){


  
  if(!localStorage.getItem('crud')){

     const arr = [];

     arr.push([title,author,year])

    const stringArr = JSON.stringify(arr)

    localStorage.setItem('crud',stringArr)
    

    callReader();
    
  }
  else{
    const jsonArr = localStorage.getItem('crud')
    const parsedArr = JSON.parse(jsonArr);

    parsedArr.push([title,author,year]);

    const stringArr = JSON.stringify(parsedArr)

    localStorage.setItem('crud',stringArr)

  
     
     callReader();

  }

 


  
}

function Reader(isNew){

  const jsonArr = localStorage.getItem('crud')
  const parsedArr = JSON.parse(jsonArr);
  if(isNew){

    if(localStorage.getItem('crud')){

 const table =  document.getElementById('bookListTable');
    table.innerHTML += ` 
    <tr>
      <td>${parsedArr[0][0]}</td>
      <td>${parsedArr[0][1]}</td>
      <td>${parsedArr[0][2]}</td>
      <td><button onclick="deleter(${0})" >Delete</button></td>
    </tr>
   `


    }
   


  }

  else{

  const table =  document.getElementById('bookListTable');
   
 
  table.innerHTML =  " ";
   parsedArr.forEach((element,index) => {
   

      const data = `
       <tr>
        
      <td> ${element[0]}</td>
      <td>${element[1]}</td>
      <td>${element[2]}</td>
      <td><button onclick="deleter(${index})" >Delete</button></td>
      
    </tr>`

    table.innerHTML +=  data;
    

  })
 
 
 


 

}}

 function callReader(){
  if(localStorage.getItem('crud')){
  
 const localStorageString = localStorage.getItem('crud');
 const parsedArr = JSON.parse(localStorageString)
 
  
   
    
     Reader(false)
  

 
   
 }

 else{
  Reader(true)
     

 }
 
 }

 
 function deleter(index){
   
  const jsonArr = localStorage.getItem('crud')
    const parsedArr = JSON.parse(jsonArr);

     
   parsedArr.splice(index,1)

   

  
   

   const stringArr = JSON.stringify(parsedArr)

   localStorage.setItem('crud',stringArr)

     
    
    callReader();
  
  
 }
 
 callReader();

const form = document.querySelector("form");
const calcBtn = document.querySelector("#calc");

form.addEventListener('submit',function (e){
   e.preventDefault()

   const height = document.getElementById("height").value;
   const weight = document.getElementById("weight").value;
   const result = document.getElementById("results");

   if(height.trim().length < 1 || weight.trim().length < 1 ){
       alert("Enter Value !")
   }
   else {
    const parsedHeight = parseInt(height);
    const parsedWeight = parseInt(weight);

    const BMI =  parsedWeight / (parsedHeight / 100)**2;

    if(isNaN(BMI)){
       alert('Enter Numerical Values')
    }
    else if(  parsedHeight  < 1 ||  parsedWeight  < 1 || BMI === 0){
       alert('Enter Valid Values')
    }
    else{
  
       result.innerHTML = `<h3>Your BMI is ${BMI.toFixed(1) }</h3>`
    }
   }
})

 

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
      
      if(BMI > 0 && BMI < 18.6  ){
          result.innerHTML = `<h3>Your BMI is Under Weight ${BMI.toFixed(1) }</h3>`
      }
      else if(BMI >= 18.6 && BMI <=24.9){
         result.innerHTML = `<h3>Your BMI is Normal Range ${BMI.toFixed(1) }</h3>`
     }
     else  if(BMI > 24.9 && BMI <=200) {
      result.innerHTML = `<h3>Your BMI is Overweight  ${BMI.toFixed(1) }</h3>`
  }

    }
   }
})

 
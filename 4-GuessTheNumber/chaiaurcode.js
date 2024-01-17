// generate random number on each reload;
const randomNum = Math.round(Math.random()*100);

console.log(`Don't Tell AnyOne : ${randomNum}`); // random num shower;

// remain guesses
let guessRemain = 1;
const previourGuesses = [];
// userInput Element selected;
const userInputEle = document.getElementById("guessField");

// submit btn selected;
const submitBtn = document.getElementById("subt");

// return true or false and check its number or not ;
const isValidInput = function (input) {
    const userInput = input.value;

    if(userInput.trim().length < 1 || isNaN(userInput)){
        alert("Enter Valid Number")
        return false;
    }
    else{
        return true;
    }
}

// check result ; 
const resChecker = function(userInputEle){
  let userInput = userInputEle.value;
  const messageToUser = document.querySelector(".lowOrHi")
//   message to user;
 if(guessRemain > 0 ){
     
  if(userInput == randomNum){
   messageToUser.innerText =  "you won start New Game (reload tab)";
    guessRemain--;
    submitBtn.disabled = true
     
    
    guessShower()
  }
 
  else if(userInput > randomNum){
    messageToUser.innerText = "too high";
    guessRemain--;
    guessShower()
  }
  else if (userInput < randomNum){
    messageToUser.innerText ="too low";
    guessRemain--;
    guessShower()
  }

  
}
else if (guessRemain == 1  ){
  messageToUser.innerText ="you lost Start New by Reloading Page , num was "+ randomNum;
    submitBtn.disabled = true
    guessRemain--;
    guessShower()
}
}

// Display guessRemaining;
const guessShower = () => {
 const ele = document.querySelectorAll(".lastResult");

 ele.forEach((e) => {
     
    
    e.innerText = guessRemain;
 }) 
 
}

// previourGuesses shower;
const previourGuessesShower = () => {
    const ele = document.getElementsByClassName("guesses")[0];
   
    
        
       
       ele.innerText = previourGuesses;
      
    
   }
// onclick  EventListener;
submitBtn.addEventListener("click",() => {
   const isTrue =  isValidInput(userInputEle);
    if(isTrue){
        resChecker(userInputEle)
        previourGuesses.push(userInputEle.value)
        previourGuessesShower()
        userInputEle.value = "";
    }
} );


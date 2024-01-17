


//  function that show time ;
const Time = function(){
    // clock element selector ;
    const clock = document.getElementById("clock");

     const time = new Date().toLocaleTimeString()
 
      clock.innerText = time;
 
}

Time(); // To immediatly show time ;


setInterval( Time,1000); // To update clock perSecond;
 
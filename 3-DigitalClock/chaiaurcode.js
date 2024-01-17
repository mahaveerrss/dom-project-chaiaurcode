


//  function that show time ;
const Time = function(){
    // clock element selector ;
    const clock = document.getElementById("clock");

    // Time;
    const hour = new Date().getHours() 
    const min = new Date().getMinutes() 
    const sec = new Date().getSeconds() 
     
    // show time without prefix 0 ;
    const otherWise =  clock.innerText = `${hour}:${min}:${sec}`;

        // To add  0 as prefix for less than 10 values ;
     (hour < 10 ) ? clock.innerText = `0${hour}:${min}:${sec}` : otherWise; 
     (min < 10 ) ? clock.innerText = `${hour}:0${min}:${sec}` : otherWise; 
     (sec < 10 ) ? clock.innerText = `${hour}:${min}:0${sec}` : otherWise; 
}

Time(); // To immediatly show time ;


setInterval( Time,1000); // To update clock perSecond;
 

// window.onload executes JS immediately after page has been loaded 
window.onload = function () {
// set all to 0 as a starting point

    let minutes = 00; 
    let seconds = 00; 
    let tenths = 00; 

// access your HTML elements by ID
    const appendMinutes = document.getElementById("minutes"); 
    const appendSeconds = document.getElementById("seconds"); 
    const appendTenths = document.getElementById("tenths"); 

    const buttonStart = document.getElementById("button-start");
    const buttonStop = document.getElementById("button-stop");
    const buttonReset = document.getElementById("button-reset");

    let Interval ;
  
    buttonStart.onclick = function() {
        // the built-in clearInterval method clears a timer set with setInterval 
        // start out with a clean slate: 
       clearInterval(Interval);

       //setInterval calls a function - here, startTimer is called every 10 milliseconds (ie, every 0.01 seconds)  
       // by calling the startTimer function, you make the stopwatch 'tick' 
       Interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick = function() {
        // when you click the stop button, it stops the time Interval 
        clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       // when you click reset, it stops the time and changes the interval to 00 on all fronts  
       clearInterval(Interval);
       minutes = "00"; 
       seconds = "00";
       tenths = "00";

       appendMinutes.innerHTML = minutes; 
       appendSeconds.innerHTML = seconds;
       appendTenths.innerHTML = tenths;

    }
    
     
    
    function startTimer () {
      // tenths of seconds counter
      tenths++; 
      if(tenths <= 9){
        appendTenths.innerHTML = "0" + tenths;
      }
      if (tenths > 9){
        appendTenths.innerHTML = tenths;
        
      } 
      // if your tenths of seconds go above 99 tenths of a second, create a second counter:  
      if (tenths > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tenths = 0;
        appendTenths.innerHTML = "0" + 0;
      }
      

      // seconds counter 
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }

      // minutes counter
      if (seconds > 60) {
          minutes++; 
          appendMinutes.innerHTML = "0" + minutes; 
          seconds = 0; 
          appendSeconds.innerHTML = "0" + 0; 
      }
    
    }
    
  
  }
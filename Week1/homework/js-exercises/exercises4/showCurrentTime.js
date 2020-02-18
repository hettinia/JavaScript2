//function will execute when it's loading in the browser
//the startTime function will execute each one second
window.onload = setInterval(startTime, 1000 );

//creat DOM element for show current time in h1 tag
const body = document.querySelector('body');
let currentTime = document.createElement('h1');
currentTime.style = "border: 2px solid green; width: 15%; margin: auto; display: block; text-align: center; background-color: #84F88A;";
body.appendChild(currentTime);

//this function will calculate the current time as HH:MM:SS
function startTime(){ 
    
    let today = new Date();
    let h = today.getHours();
    let m = correctTime(today.getMinutes()); //add 0 if minute less than 10
    let s = correctTime(today.getSeconds()); //add 0 if second less than 10
    currentTime.innerHTML = h + ":" + m + ":" + s; 
}

//this function will add 0 to the left of passed number and return the result
function correctTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }



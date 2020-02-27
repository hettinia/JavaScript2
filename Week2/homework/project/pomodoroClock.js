// declaration DOM variables
const duration = document.getElementById('duration');
const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const timer = document.getElementById('timer');
const timerBackup = timer; // this backup will use to restore the timer element
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const timesUp = document.createElement('h2');
var start = 0; // setInterval ID

// Time's Up DOM element
timesUp.innerText = "Time's up!";
timesUp.style = 'font-size: 5rem; color: #FF0000; text-shadow: 1px 1px 2px #000000;';

// on click function for reset button
resetBtn.addEventListener('click', () => {
    duration.innerText = '25';
    minutes.innerText = duration.innerText;
    seconds.innerText = '00';
    minutes.innerText = correctTime(minutes.innerText);
    timesUp.parentNode.replaceChild(timerBackup , timesUp);
});

// on click function for minus button
minusBtn.addEventListener('click', () => {
    // prevent duration less than 1 minutes
    if (parseInt(duration.innerText) >= 2) {
        duration.innerText--;
    }
    minutes.innerText = duration.innerText;
    minutes.innerText = correctTime(minutes.innerText);
});

// on click function for plus button
plusBtn.addEventListener('click', () => {
    duration.innerText++;
    minutes.innerText = duration.innerText;
    minutes.innerText = correctTime(minutes.innerText);
});

// on click events for play and pause
playBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);

// main function which will start timer
function startTimer () {
    
    disableBtns(true); // disable play, reset, minus and plus buttons during timer starting
    start = setInterval( () => {
        if (seconds.innerText === '00') {
            seconds.innerText = '59';
            minutes.innerText--;
            minutes.innerText = correctTime(minutes.innerText);
            
        } else {
            seconds.innerText--;
            seconds.innerText = correctTime(seconds.innerText);
        }
        if (minutes.innerText === '00' && seconds.innerText === '00') {
            clearInterval(start);
            disableBtns(false); // enable buttons after time's up
            // replace timer with "Time's Up!"
            timer.parentNode.replaceChild(timesUp , timer);   
        }
        
    }, 1000);
}

// pause timer function
function pauseTimer () {

    clearInterval(start);
    disableBtns(false); // enable buttons during pause 
}

// this function will add 0 before minutes and seconds when it's less than 10
function correctTime(timeElem) {
    if (parseInt(timeElem) < 10) {
        timeElem = '0' + timeElem;
    }
    return timeElem;
}

// disable/enable play, reset, minus and plus buttons
function disableBtns(status) {
    minusBtn.disabled = status;
    plusBtn.disabled = status;
    playBtn.disabled = status;
    resetBtn.disabled = status;
}
 

//creat DOM element for cat img
const catImg = document.querySelector('img');
//Change the style of the img to have a "left" of "0px"
catImg.style.left = "0px";
let i =0; //this variable is the shift value (10) of img left position
const fullWidth = window.innerWidth; //store the screen width
const halfWidth = window.innerWidth / 2; //store the half of screen width
let catWalkId = setInterval(catWalk, 50); //Call that catWalk function every 50 milliseconds

//this function will walk the cat across the screen width
function catWalk(){
    //give the left position of the cat 10px more 
    i += 10;
    catImg.style.left = i+'px';

    /*if the left position arrived the end of screen minus the cat img width
       back the cat to the left of screen*/
    if (parseInt(catImg.style.left) >= (fullWidth - catImg.width)){
        catImg.style.left = "0px";
        i=0;
    }

    /*if the cat arrived the screen center dance the cat for 5 seconds
    and here I calculate the screen width as a range not as a point because the left position step is 10px
    and it is difficult to get a match between the cat left position and the point of middle screen*/
    else if ((parseInt(catImg.style.left) >= ((halfWidth - (catImg.width / 2)) - 5)) && (parseInt(catImg.style.left) <= ((halfWidth - (catImg.width / 2)) + 4))){

        clearInterval(catWalkId); // stop calling the catWalk function
        catImg.src = "tenor.gif"; // change the src of cat img to the dancer one
        var startTime = new Date().getTime(); 

        // this function will dance the cat
        var danceTheCat = function() {
            var currTime = new Date().getTime();
            var secondsElapsed = ((currTime - startTime)/1000); 
            if (secondsElapsed <= 5) {
                // while the timer not exceed 5 seconds keep the cat dancing
                window.requestAnimationFrame(danceTheCat);
            }else{
                // after the 5 seconds out continue walk the cat
                catImg.src = "cat-walk.gif";
                catWalkId = setInterval(catWalk, 50);
            }
        };
        danceTheCat();
    }  
}

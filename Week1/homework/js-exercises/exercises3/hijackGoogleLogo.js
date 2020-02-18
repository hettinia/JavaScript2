//this function will change the Google logo to HackYourFuture logo
//just copy it and execute it in the google webpage console
(function hijackGoogleLogo(){
    //Inspect logo element in the google page to know its id
    const googleLogo = document.getElementById("hplogo");
    //Modify the source and sourceset of the logo so that it's replaced by the HackYourFuture logo instead
    googleLogo.src = "https://www.hackyourfuture.dk/static/logo-dark.svg";
    googleLogo.srcset = "https://www.hackyourfuture.dk/static/logo-dark.svg";
         
} ());
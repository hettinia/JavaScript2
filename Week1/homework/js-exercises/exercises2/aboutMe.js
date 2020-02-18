// Change the body tag's style so it has a font-family of "Arial, sans-serif"
const body = document.querySelector('body');
body.style.fontFamily = "Arial, sans-serif";

//Replace each of the spans (nickname, fav-food, hometown) with my information
//nick name
let nickNameSpan = document.getElementById('nickname');
nickNameSpan.replaceWith('Hettini');
//favorite food
let favFoodSpan = document.getElementById('fav-food');
favFoodSpan.replaceWith('Fish');
//home town
let homeTownSpan = document.getElementById('hometown');
homeTownSpan.replaceWith('Syria');


let listItems = document.querySelector('ul').children;
//Iterate through each li and change the class to "list-item"
for (let i=0; i<listItems.length; i++){
    listItems[i].className = "list-item";
}

//Add a style tag that sets a rule for .list-item to make the color red
const head = document.querySelector('head');
let style = document.createElement('style');
style.innerHTML = ".list-item {color: red;}";
head.appendChild(style);

//Create a new img element and set its src attribute to my picture
let myPic = document.createElement('img');
myPic.src = "my-pic.jpg";
myPic.style.width = "12rem";
body.appendChild(myPic);


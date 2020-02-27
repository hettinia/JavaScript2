const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
];

// create DOM elements for body and unordered list
const body = document.querySelector('body');
const hobbiesList = document.createElement('ul');
body.appendChild(hobbiesList);

// using forEach function to create DOM li for each hobby in the array
myHobbies.forEach( (currentHobby) => { 
    const hobbyItem = document.createElement('li');
    hobbyItem.innerText = currentHobby;
    hobbiesList.appendChild(hobbyItem);
 }); 
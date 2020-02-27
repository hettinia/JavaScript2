const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];

// this function will calculates the combined age of HYF members
function main(membersAges, callBack) {

    let totalAges = callBack(membersAges);
    // log the result string to the console
    console.log('The collective age of the HYF team is: ' + totalAges);
    // return combined ages as a number
    return totalAges;
}

// use of the map function to get the ages
const getAges = hackYourFutureMembers.map( e => e.age );

// The callback adds all the ages together and returns the number
function collectiveAges (agesArray) {
    return agesArray.reduce( (total, age) => total + age , 0);
}

// call main function
main(getAges, collectiveAges);

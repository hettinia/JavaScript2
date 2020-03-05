'use strict';

// DOM elements declaration
const billCost = document.getElementById('billCost');
const serviceLevel = document.getElementById('serviceLevel');
const peopleCount = document.getElementById('peopleCount');
const calculateBtn = document.getElementById('calculateBtn');
const tipAmount = document.getElementById('tipAmount');
const amount = document.getElementById('amount');
const each = document.getElementById('each');

// reset input values on window load
window.onload =  () => {
    billCost.value = '';
    serviceLevel.value = '';
    peopleCount.value = '1';
    hideTheResult('none'); // give the result sentence none display to hide it
}

// set some style options for the service dropdown list
serviceLevel.addEventListener('click', () => {
    serviceLevel.style = 'background-color: #7A7F80; color: #ffffff;';
});

// on click function for calculate button
calculateBtn.addEventListener('click', () => {
    // get values from the inputes and convert it to integer
    let billCostNum = parseInt(billCost.value);
    let serviceLevelNum = parseInt(serviceLevel.value);
    let peopleCountNum = parseInt(peopleCount.value);
    let tip = 0;
    let isServiceLevel = true;

    // calculate the tip amount upon the service level selected
    switch(serviceLevelNum) {
        case 30:
            tip = billCostNum * 30 / 100;
          break;
        case 20:
            tip = billCostNum * 20 / 100;
          break;
        case 15:
            tip = billCostNum * 15 / 100;
          break;
        case 10:
            tip = billCostNum * 10 / 100;
          break;
        case 5:
            tip = billCostNum * 5 / 100;
          break;
        default:
            alert('Please choose a service level!!');
            isServiceLevel = false;
    }

    // if all inputs are filled and all numbers are valid then calculate the tip amount
    if (isValidNum(billCostNum) && isValidNum(peopleCountNum) && isEmpty() && isServiceLevel) {
        amount.innerText = '$' + (tip / peopleCountNum);
        hideTheResult('block'); //give the result sentence block display to show it
    }    
    
});

// this function wil hide/show the result sentence
function hideTheResult(status) {
    tipAmount.style.display = status;
    amount.style.display = status;
    // if the number of people who sharing the bill not more 1 no need to each word
    if (peopleCount.value === '1') {
        each.style.display = 'none';
    } else {
        each.style.display = status;
    }
}

// this function will check the numbers validation
// if the user enter zero or minus values it will return false
function isValidNum(num) {
    if (num <= 0) {
        alert('Please enter a valid values!!');
        return false;
    }
    return true;
}

// this function will check if the inputs are empty or not
function isEmpty() {
    if (billCost.value === '' || peopleCount.value === '') {
        alert('Empty fields not allowed');
        return false;
    }
    return true;
}

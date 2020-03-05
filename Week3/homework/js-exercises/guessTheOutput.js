'use strict';

// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

/*
the result is 12
the variable 'a' declared and initialized in the globle scope with '10' value, 
then in the function 'x' scope a new value assigned to 'a' is '12'.
so after the direct calling of 'x' function variable 'a' will be '12' 
so when 'x' call the closure function it will print 12
*/
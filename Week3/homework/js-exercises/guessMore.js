'use strict';

// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*
the result is:
x=9 
in this case the value of variable 'x' which is passed to the function f1
so any change will happened inside the function will not cahnge variable 'x' outside the function
/////////////////////////////////////////////////////////////////////////
y = {x: 10}
in this case the reference of the object 'y' which is passed to the function f2
so this objects properties will be accessible to the function and can be changed
and this what's happened in function f2, we changed property 'x' value to '10'
because we passed this object reference

*/
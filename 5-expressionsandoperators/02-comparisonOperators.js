/*
comparison operators
*/

//equality
console.log('3' == 3); //true
console.log('three' == 3); //false
console.log(0 == false);

//strict equality
console.log(3 === 3); //checks both value and type

console.log(3 === '3'); //false

//not equal
console.log('3' != 4); //true-> doesnt care about type

//strict not equal
console.log('3' !== 3); //true-> checks type and value

// greater than
console.log(3 > 2);

//less than
console.log(2 < 3);

//greater than or = to
console.log(3 >= 3);

//less than or = to
console.log(4 <= 4);

//and
//returns true if the left and right are both true
console.log(true && true); //true
let x = 5;
console.log(x < 10 && x > -5); //true
console.log(x < 10 && x > 15);  //false

let str = 'a';
console.log(str < 'p'); // true

//or : return true left or right are true
console.log(true || false);
let x = 5; //true
console.log(x < 10 || x > 15); //true


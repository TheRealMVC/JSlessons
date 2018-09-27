/*
Types

*/

//Booleans
let on = true;
console.log(on);  //output = true

let off = false;
console.log(off);


//boolean can represent: true/false, on/ff, yes/no

//null
/*
Null = empty value(not 0; not undefined)

it is like an empty container; nothing is in it however it still exsists as a space to fill

*/

let empty = null ;
console.log(empty);

//undefined
/*
undfined = no value assigned (not even an empty container)

undefined is not an error
*/

let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

/*think of undefined and null as packages used by ups 
null-> package deliberately sent out from ups as empty
undefined-> package that was forgotten, or a package that has not yet been used
*/

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);




let anotherNum = 0.2 + 0.1;
console.log(anotherNum);

let num = 0.3;
console.log(num);


let numbersAreHard = (0.2 * 10 + 0.1 *10) /10;
console.log(numbersAreHard);


//Strings
//strings = any value within qoutes; JS will spit out the value within the qoutes
let stringOne = "double qoutes";
let stringTwo = 'single qoutes';
console.log(stringOne, stringTwo);

//numbers vs strings 
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);//number
console.log(second);//string

console.log(typeof first);//number
console.log(typeof second);//string


//What's going on here?
// + --> addition when given 2 numbers, concatenation when given 2 strings


let third = 1050 + '100';
console.log(third);// gives you 1050100

//Challenge:

let firstName = 'Mitch';
let lastName = 'Van Cleave';
let houseNumber = 841;
let street = 'Berry Rd';
let city = 'Greenwood';
let state = 'Indiana';
let zipCode = 46143;
console.log(houseNumber, street, city, state, zipCode);
console.log(firstName + lastName + ',', + houseNumber, street + ',', city + ',', state, zipcode);

//objects
/*
what is an object?
a container that can hold multiple datatypes

denoted by {}
has keys and values (color(key): 'blue' (value)), seperated with a colon
each key seperated with a coma

*/

let burritosNow = {
size: 'large',
quantitiy: 4, 
now: true
}
console.log(burritosNow);
console.log(typeof burritosNow);

//Arrays
/* 
arrays are great for lists
denoted by[]
have values seperated by commas --> ['blue', 'green', 'yellow']
*/

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);
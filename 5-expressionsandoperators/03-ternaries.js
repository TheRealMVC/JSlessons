//ternaries

var x = 6;

(x > 0) ? console.log("x is greater than 0.") : console.log("x is not greater than 0")

(x == 0) ? console.log("hello") : (x < 0) ? console.log("x is less") : console.log("x is greater than 0")

/* Challenge:
Write a ternary that does the same thing as the age challenge

Age Challenge (if else):

var age = 30;

if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 18) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}

*/

var age = 30


(age >= 25) ? console.log('old fart.') 

(age >=21) ? console.log('get smashed') : console.log('thats illegal')

(age == 17) ? console.log("kid") : (x < 17) ? console.log('toddler')  : console.log('fail')


let yep = -8;

(yep < 0 && yep > -10) ? console.log("yep is between 0 and -10") : (yep > 0) ?
console.log("yep is greater than 0") : console.log("yep is grater than 0");
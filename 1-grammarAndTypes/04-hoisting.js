/* 
Hoisting
*/

console.log(scissors); //undefined
var scissors = 'blue';
console.log(scissors); //blue
hello();// this is calling the function in your print list
function hello(){
    console.log('hoisting is...interesting')
}
hello(); //"hoisting is...interesting"
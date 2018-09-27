/*
for of loops

better for arrays
*/

let student = {name: 'doug', awesome: true, degree: 'javascript', week: 1};
for (let key of student) {
    console.log(key)
}

let catArray = ['tabby', 'britshort', 'broom', 'racoon'];

for (dog of catArray){
    console.log(dog, 'says meow');
}

for (dog in catArray) {
    console.log(dog, 'says meow')
}
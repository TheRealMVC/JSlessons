//intro to arrays

//have [] brackets
//can hold multiple data types
//great for listing

//overview/calling

let students = ['steve', 'charly', 'mike', 'reese', 23, true, ['ryan', 'tara']];
//index numbers   0         1        2        3      4    5           6


console.log(typeof students); //object
console.log(students[2]);

console.log(students[6,1]);

console.log(students[6]);

console.log(students[6-1]);
console.log(students[6[1]]);
console.log(students[6][1]); //Tara, grabbing a name inside of a nested array
console.log(`hello ${students[6][1]} you look good`)

let food = ['Pecan pie', 'shrimp', 'chicken', 'farts', 'oreo'];

for (let f of food){
    console.log(f);
    for (let i = 0; i < food.length; i++){
        console.log(food[i]);
    }
}
food.push('pizza')
console.log(food);
food.splice(1, 1, 'banana'); //first num to start at, second num: number of things to remove, third number is the replacement value
console.log(food);
food.splice(2, 0, 'sweet patato');


food.pop() //removes the last value
//iterating

let food = ['Pecan pie', 'shrimp', 'chicken', 'farts', 'oreo'];

food.forEach(f => {console.log(f)});

food.forEach((food, number) => {
    console.log(food);
    console.log(number);
})

let movies = ['Forest Gump', 'Joe Dirt', 'Friday', 'American Psycho']

//movies.forEach(movies) => {
    console.log(movies);

//}
movies.splice(1, 1, 'Dirty Money')

//let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.long(long.length);


let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);
})
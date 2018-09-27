//arrow functions

function coffee() {
    console.log('coffee sucks')
}

let tea = () => {
    console.log('green tea is the shiiiit')
}
coffee();
tea();

var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} and ${puppy} balls`);
}
cats(2, 3);

//arrow function body styles
//concise

let apples = x => console.log(`there are ${x} apples`)
apples('shitty')

//block

let peaches = (x) => {console.log(`there are ${x}`)}
peaches('shits')
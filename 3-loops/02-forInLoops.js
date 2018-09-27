//They are great for iterating over values in an object

let student = {name: 'chris', awesome: true, degree: 'javascript', week: 1};
for (let item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'britshort', 'broom', 'racoon'];

for (cat in catArray){
    console.log(catArray[cat]);


}
let stuArray = ['mike', 'jim', 'carry', 'herman', 'stacy'];

for (let stu of stuArray) {
    stu = stu.charAt(0).toUpperCase() + stu.substr(1);
    console.log(stu);
}
/*cannot be a reserved keyword like var, let, if, etc. 
Meaningful names. 
Cannot start with a number
Cannot have a space or hyphen (-)
*/

const final = 1;
console.log(final);

let undef; //value is undefined rn. do let, var is oldschool
console.log(undef);

let cleared = null;
console.log(cleared);

let person = {
    //properties of the object
    name: 'Zelma',
    age: 20
};
console.log(person);

//Dot notation
person.name = 'Trisha';
console.log(person.name);

//Bracket notation. In case selected what you want at runtime. 
let selection = 'age';
person[selection] = 21;

console.log(person[selection]);

//Arrays! Length is dynamic and types are dynamic too. You can have different types in an array
let colors = ['red','blue'];
console.log(colors[0]); //prints red
//can just add 
colors[2] = 'purple';
console.log(colors.length); //number of items

//Functions! AKA Methods
function greet(name){ //parameter 
    console.log('Hello '+name);
}

greet('Ozarks'); //argument
greet('Zayra'); //argument

//Calculate something
function double(num){
    return num*2;
}
console.log(double(128));
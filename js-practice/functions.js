function greet(name) {
    return `hello ${name}!`;
}
console.log(greet('Hansen'));
console.log(greet('Cedrick'));
console.log(greet('Santos'));

function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

console.log('add: ', add(5,5));
console.log('sub: ', sub(5,5));
console.log('multiply: ', multiply(5,5));
console.log('divide: ', divide(5,5));

const addArrow = (a,b) => a + b;
console.log("add (arrow function): ", addArrow(5, 5));

function isEven(number){
    return number % 2 == 0;
}
console.log('is 4 even?', isEven(4));
console.log('is 8 even?', isEven(8));
console.log('is 12 even?', isEven(12));
console.log('is 16 even?', isEven(16));
console.log('is 20 even?', isEven(20));
console.log('is 11 even?', isEven(11));
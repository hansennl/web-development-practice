const fruits = ["grapes", "banana", "orange", "apple", "mango"];

console.log('first fruit: ', fruits[0])
console.log('last fruit: ', fruits[fruits.length - 1]);

fruits.push('blueberry');
console.log('after push: ', fruits)

fruits.pop();
console.log('last fruit remove: ', fruits)

console.log('fruits length: ', fruits.length)

console.log('classic for loop');
for (let i = 0; i <fruits.length; i++){
    console.log (fruits[i]);
}
console.log('for loop: ');
for (const fruit of fruits){
console.log(fruit);
}

console.log ('forEachMethod: ');
fruits.forEach((fruit) => console.log(fruit));

const uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("UpperCase :", uppercaseFruits);

const lowercaseFruits = fruits.map((fruit) => fruit.toLowerCase());
console.log("LowerCase: ", lowercaseFruits);

const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log("Fruits >  5 letter : ", longFruits);

const aFruit = fruits.find((fruit) => fruit .toLowerCase().startsWith("g"));
console.log("fruit that starts with g: ", aFruit);
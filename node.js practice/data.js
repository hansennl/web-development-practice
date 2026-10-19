const fs = require('fs');
const path = require('path');

console.log('Current Directory (__dirname):', __dirname);
console.log('Current File (__filename):', __filename);

const absolutePath = path.join(__dirname, 'data.txt');
console.log('Constructed Path:', absolutePath);

try {
  
  if (!fs.existsSync('data.txt')) {
    fs.writeFileSync('data.txt', 'Hello from Node.js File System!');
  }

  const content = fs.readFileSync('data.txt', 'utf8');
  console.log('\n--- Reading data.txt ---');
  console.log(content);
} catch (err) {
  console.error('Error reading file:', err.message);
}

const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grape'];
const jsonFilePath = path.join(__dirname, 'fruits.json');

fs.writeFileSync(jsonFilePath, JSON.stringify(fruits, null, 2));
console.log('\n--- fruits.json created successfully with 5 items! ---');

const rawData = fs.readFileSync(jsonFilePath, 'utf8');
const parsedFruits = JSON.parse(rawData);

parsedFruits.push('Pineapple');

fs.writeFileSync(jsonFilePath, JSON.stringify(parsedFruits, null, 2));
console.log('Updated fruits array saved to file:', parsedFruits);
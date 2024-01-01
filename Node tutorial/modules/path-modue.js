//Let's learn path modules 
const path = require('path')

console.log(path.sep);
// it print the path seprator 

const filePath = path.join('modules', 'file.txt')
//it join all givcen arguments toghther to create a signle path
console.log(filePath);

const base = path.basename(filePath)
// it gives y the last part of your path
console.log(base)

const absolute = path.resolve('text.txt');
//it gives the absolute path if a given file
console.log(absolute)
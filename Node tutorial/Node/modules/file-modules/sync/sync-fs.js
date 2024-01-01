const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./modules/file-modules/sync/text1.txt', 'utf8')
const second = readFileSync('./modules/file-modules/sync/text2.txt', 'utf8')

//this function read the content of a given file 


writeFileSync(
    './modules/file-modules/sync/text3.txt',
    `Hello , this is : ${first, second}`,
)
//this function write in a given file
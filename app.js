const { readFile, writeFile } = require('fs')
const util = require('util')
// .promises make those function return promises 

//Promise 
const readFilePromisify = util.promisify(readFile)
const writeFilePromisify = util.promisify(writeFile)


const read = async (path) => {
    try {
        const first = await readFilePromisify(path, 'utf8')
        console.log(first)
    }
    catch (err) {
        console.log(err)
    }
}

const write = async (path, text) => {
    try {
        const first = await writeFilePromisify(path, text)
        console.log(first)
    }
    catch (err) {
        console.log(err)
    }
}
//getText("./modules/file.txt")

write("./modules/file.txt", "Hello joe mama")


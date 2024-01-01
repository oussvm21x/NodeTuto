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

const write = async (path) => {
    try {
        const first = await writeFilePromisify(path, 'Hello donedada')
        console.log(first)
    }
    catch (err) {
        console.log(err)
    }
}
getText("./modules/file.txt")

read("../modules/file.txt")
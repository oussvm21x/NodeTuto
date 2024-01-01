const { readFile, writeFile } = require('fs').promises
// .promises make those function return promises 

//Promise 

const start = async (path) => {
    try {
        const first = await readFile(path, 'utf8')
        console.log(first)
    }
    catch (err) {
        console.log(err)
    }
}
//getText("./modules/file.txt")

start("./modules/file.txt")
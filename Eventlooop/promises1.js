const { readFile, writeFile } = require('fs')

//Promise 
const getFileText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const getText = (path) => {
    getFileText(path)
        .then((data) => { console.log(data) })
        .catch((err) => { console.log(err) })

}

const start = async (path) => {
    try {
        const first = await getFileText(path)
        console.log(first)
    }
    catch (err) {
        console.log(err)
    }
}
//getText("./modules/file.txt")

start("./modules/file.txt")
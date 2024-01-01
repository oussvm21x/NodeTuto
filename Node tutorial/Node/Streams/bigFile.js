const { writeFile } = require('fs').promises

const writeData = async (data) => {
    try {
        const first = await writeFile("./Streams/data.txt", data, { flag: 'a' })
        console.log(first)
    }
    catch (err) {
        console.log(err)
    }
}
for (let i = 0; i < 7000; i++) {
    writeData(`hello world ${i} \n`)
    console.log(`${i}`)
}
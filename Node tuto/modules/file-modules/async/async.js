const { readFile, writeFile } = require('fs')

readFile('modules/file-modules/async/text1.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        const text1 = data
        readFile('modules/file-modules/async/text2.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                const text2 = data
                writeFile('modules/file-modules/async/text3.txt', text1 + text2, (err) => {
                    if (err) throw err
                    readFile('modules/file-modules/async/text3.txt', 'utf8', (err, data) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            console.log(data)
                        }
                    })
                })
            }
        })
    }
})
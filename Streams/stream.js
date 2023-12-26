const { createReadStream } = require('fs')

const stream = createReadStream('./Streams/data.txt')
//READ STREAMS IS USED TO READ DATA BY CHUNKS , BASED ON THE SIZE OF THE BUFFER

// stream.on('data', (result) => {
//     console.log(result)
// })

//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 30 20 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 31 20
//0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 32 20 0a 68 65 6c 6c 6f ... 65486 more bytes>

// YOU CAN SEE THAT THE SIZE OF THE BUFFER IS 654286 BYTE

// The default size of the buffer is : 64KB
// the last buffer indicatethe reminder data



const stream1 = createReadStream('./Streams/data.txt', { highWaterMark: 90000 })

// stream1.on('data', (result) => {
//     console.log(result)
// })

// highWaterMark  - Control the size
// You can now see that the buffer size is 90K


const stream2 = createReadStream('./Streams/data.txt', { encoding: 'utf8' })
stream2.on('data', (result) => {
    console.log(result)
})

// encouding - Control the data ecoudning
//you can now see that the data is ecouded in utf8
// Basically its ecounded in assci hex 
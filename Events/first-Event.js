const EventEmitter = require('events')

const customeEvent = new EventEmitter()

customeEvent.on('response', (name, id) => {
    console.log(`Data recieved seccesfully \n username : ${name} \n Id : ${id}`)
})


customeEvent.emit('response', 'oussama', 12)
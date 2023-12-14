const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcom to the home page')
    }

    else if (req.url === '/about') {
        res.end('Welcom to the about page')
    }
    else res.end('Not found')//used to end the response process 
})

server.listen(5000)
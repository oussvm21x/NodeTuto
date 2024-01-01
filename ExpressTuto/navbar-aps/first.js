const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./index.html')
const homeStyle = readFileSync('./style.css')
const homeScript = readFileSync('./script.js')

const server = http.createServer((req, res) => {
    let url = req.url;
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end();
    }
    else if (url === '/style.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyle)
        res.end();
    }
    else if (url === '/script.js') {
        res.writeHead(200, { 'content-type': 'text/js' })
        res.write(homeScript)
        res.end();
    }
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text' })
        res.write("This is the about page")
        res.end();
    }
    else if (url === '/signin') {
        res.writeHead(200, { 'content-type': 'text' })
        res.write("This is the signin page")
        res.end();
    }
    else if (url === '/help') {
        res.writeHead(200, { 'content-type': 'text' })
        res.write("This is the about page")
        res.end();
    }
    else {
        res.writeHead(404, { 'content-type': 'text' })
        res.write("Page not found")
        res.end();
    }

})

server.listen(5000)


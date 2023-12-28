const http = require('http')

const server = http.createServer((req, res) => {
    let url = req.url
    console.log(url)
    res.end("SERVER ON")
})


server.listen(5000)
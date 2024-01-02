const express = require('express')
const path = require('path')
const app = express()

const file = path.resolve(__dirname, 'navbar-aps/index.html')
const static = path.resolve(__dirname, 'static')

app.use(express.static(static))

app.get('/about', (req, res) => {
    res.send("Hello , this is about")
})
app.all('*', (req, res) => {
    console.log("User requested unexistable page")
    res.status(404).send("resource not found")
})
app.listen(5000, () => {
    console.log('Server up')
})

// app.get
// app.post
// app/put
// app.delete
// app.all
// app.use
// app.lister
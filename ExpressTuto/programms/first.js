const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log("User requested Home Page")
    res.status(200)
    res.send("<h3>This is home page</h3>")
})
app.get('/about', (req, res) => {
    console.log("User requested about page")
    res.status(200).send("This about page")
})
app.get('*', (req, res) => {
    console.log("User requested unexistable page")
    res.status(404).send("age not found")
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
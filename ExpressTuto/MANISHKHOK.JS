const express = require('express')
const { people } = require('./data')

const app = express()
const { logger, authorized, apiMiddleWear } = require('./programms/middlewears')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false })) //To make the data that we pass to the browser readabale by the server
app.use(express.json())


app.get('/api/people', (req, res) => {
    res.status(200).json({ sucess: true, data: people })

})
app.post('/api/people', (req, res) => {
    res.status(201).send('Successful')
})

app.all('*', (req, res) => {
    res.status(404).send("<h2>Page introuvable</h2>")
})
app.listen(5000, () => {
    console.log("server up on port 5000")
})


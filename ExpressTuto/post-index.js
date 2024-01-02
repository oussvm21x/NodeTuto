const http = require('http')
const express = require('express')
const { products } = require('./data')
const app = express()
const { logger, authorized, apiMiddleWear } = require('./programms/middlewears')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false })) //To make the data that we pass to the browser readabale by the server 


app.get('/', (req, res) => {
    res.status(200).send('Home Page')

})

//Here we handle post requet methods , we're adding data to the browser , and the server 
app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.send(`Hello ${name}`)
    }
    else {
        return res.send('Please eneter a name')
    }
})
app.get('/About', (req, res) => {
    res.status(200).send('About Page')

})

app.get('/api', (req, res) => {
    res.status(200).send('APIs Page')

})
app.get('/api/data', (req, res) => {
    res.status(200).send("APIs's Page")

})
app.get('/About', (req, res) => {
    res.status(200).send('About Page')

})
app.all('*', (req, res) => {
    res.status(404).send("<h2>Page introuvable</h2>")
})
app.listen(5000, () => {
    console.log("server up on port 5000")
})
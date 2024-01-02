const http = require('http')
const express = require('express')
const { products } = require('../data')
const app = express()

const logger = (req, res, next) => {
    const date = new Date()
    console.log('Method :', req.method)
    console.log('Date : ', date)
    next()
}

app.get('/', logger, (req, res) => {
    res.status(200).send('Home Page')

})

app.get('/About', logger, (req, res) => {
    res.status(200).send('About Page')

})
app.all('*', logger, (req, res) => {
    res.status(404).send("<h2>Page introuvable</h2>")
})
app.listen(5000, () => {
    console.log("server up on port 5000")
})
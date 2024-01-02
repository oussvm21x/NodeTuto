const http = require('http')
const express = require('express')
const { products } = require('../data')
const app = express()
const { logger, authorized, apiMiddleWear } = require('./middlewears')


app.use('/', [authorized, logger])
app.use('/api', [authorized, logger, apiMiddleWear])
app.get('/', (req, res) => {
    res.status(200).send('Home Page')

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
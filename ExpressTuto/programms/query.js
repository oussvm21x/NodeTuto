const http = require('http')
const express = require('express')
const { products } = require('../data')
const app = express()

app.get('/', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, price } = product
        return { id, name, price }
    })
    res.send(newProduct)
}
)

app.get('/products/:ProductId', (req, res) => {
    const ProductId = req.params
    const singleProduct = products.find((product) => {
        return (product.id === parseInt(ProductId.ProductId))
    })
    if (singleProduct) {
        res.send(singleProduct)
    }
    else {
        res.send("<h2>Page introuvable</h2>")
    }

})

app.get('/products/:ProductId/reviews/:reviewId', (req, res) => {
    const { reviewId } = req.params
    const { ProductId } = req.params
    const singleProduct = products.find((product) => {
        return (product.id === parseInt(reviewId))
    })
    if (singleProduct && reviewId != ProductId) {
        res.send("<h2>inappropriate request</h2>")
    }
    else if (!singleProduct) {
        res.send("<h2>Page introuvable</h2>")

    }
    else {
        res.send("Hello world")
    }

})


app.get("/api/v1/query", (req, res) => {
    let newProduct = [...products]
    const { search, limit } = req.query
    if (search) {
        newProduct = newProduct.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        newProduct = newProduct.slice(0, parseInt(limit))
    }
    if (newProduct.length < 1) {
        return res.status(200).json({ sucess: true, data: [] })
    }
    return res.status(200).json(newProduct)
})

app.listen(5000, () => {
    console.log("server up on port 5000")
})
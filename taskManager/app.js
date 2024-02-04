const express = require('express')
const app = express()
const router = require('./routes/task')
const dbConnection = require('./db/conect')
require('dotenv').config()
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
app.use(express.static('./public'))



app.use(express.json()) //to work with json data 
app.use('/api/v1/tasks', router)

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = 5000

const start = async () => {
    try {
        await dbConnection(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    }
    catch (error) {
        console.log('Cannot connect to the database ')
        console.log(error)
    }
}


start()

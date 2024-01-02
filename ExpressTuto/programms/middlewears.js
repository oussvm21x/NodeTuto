const logger = (req, res, next) => {
    const date = new Date()
    console.log('Method :', req.method)
    console.log('Date : ', date)
    next()
}

const authorized = (req, res, next) => {
    console.log('Authorized')
    next()

}

const apiMiddleWear = (req, res, next) => {
    console.log('ON API PATH BABY')
    next()
}


module.exports = { logger, authorized, apiMiddleWear }
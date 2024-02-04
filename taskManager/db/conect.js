mongoose = require('mongoose')

const connectString = "mongodb+srv://oussvm21x:kUU5BU82gF3g@cluster0.6oms2go.mongodb.net/taskManager?retryWrites=true&w=majority"

const dbConnection = (url)=>{
    return mongoose
    .connect(url)
    .then(()=>{
        console.log('CONNECTED TO DATABASE SUCESSFULLY')
    })
    .catch(
        (err)=>{
            console.log(err);
        }
    )

}




module.exports = dbConnection
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type : String , 
        trim : true ,
        required : true , 

    }  ,
    completed : {
        type : Boolean , 
        default : false 
    }
})

module.exports = mongoose.model('Task' , TaskSchema)
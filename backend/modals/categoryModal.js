const mongoose = require('mongoose')
const { trim } = require('validator')

const categorySchema =  new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Category must have a name'],
        unique:true,
        trim:true,
    },
    active:{
        type:Boolean,
        default:true,
        select:false
    }
},{timestamps:true});

const Category = mongoose.model("Category" ,categorySchema);


module.exports = Category;
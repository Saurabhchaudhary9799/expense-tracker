const mongoose = require('mongoose')
const { trim } = require('validator')

const userVerficationSchema =  new mongoose.Schema({
   userId:String , 
   uniqueString:String,
   createdAt:Date,
   expiresAt:Date,
});

const UserVerfication = mongoose.model("UserVerification" ,userVerficationSchema);


module.exports = UserVerfication;
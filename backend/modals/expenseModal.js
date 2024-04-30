const mongoose = require("mongoose");
const {Schema} = mongoose;
const expenseSchema = new mongoose.Schema({
 category:[{
    type:Schema.Types.ObjectId , 
    ref:'Category',
 }],
  user:[
    {
        type:Schema.Types.ObjectId,
        ref:'User',
    }
  ],
  value:{
    type:Number,
    required:[true ,'An expense must have an value'],
  },
  createdAt:{
    type:Date
  }
})

const Expense = mongoose.model("Expense" , expenseSchema);

module.exports = Expense;

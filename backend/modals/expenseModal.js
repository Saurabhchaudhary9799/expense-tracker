const mongoose = require("mongoose");
const { Schema } = mongoose;
const expenseSchema = new mongoose.Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required:[true,'an expense must be on a categoy']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required:[true,'an expense must have an user']
  },
  value: {
    type: Number,
    required: [true, "An expense must have an value"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;

const asyncHandler = require("express-async-handler");
const Expense = require("../modals/expenseModal");
const mongoose = require("mongoose");

exports.getAllExpense = asyncHandler(async(req,res,next)=>{
console.log(req.user.id);
   const expenses = await Expense.aggregate([
    {
      $match:{user: new mongoose.Types.ObjectId(`${req.user.id}`)},
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
        },
      
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } } 
   ])

   res.status(200).json({
    status:"success",
    expenses
   })
})

exports.createExpense = asyncHandler(async (req, res, next) => {
  const category_id = new mongoose.Types.ObjectId(req.body.category);

  const categories = req.user.categories;
  // console.log(categories, category_id);
  const isMatch = categories.filter((el) =>  el._id.equals(category_id) );
 
  if (isMatch.length > 0) {
    req.body.user = req.user.id;
    const expense = await Expense.create(req.body);

    res.status(201).json({
      status: "success",
      expense,
    });
  }else{
    res.status(401).json({
        status: "fail",
        message:"you can not make expenses on unexisting property",
      });
  }


});

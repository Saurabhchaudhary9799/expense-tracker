const asyncHandler = require("express-async-handler");
const Expense = require("../modals/expenseModal");
const mongoose = require("mongoose");

exports.getAllExpense = asyncHandler(async (req, res, next) => {
  // {
  //   $addFields: {
  //     expenseMonth: { $month: "$createdAt" }
  //   }
  // // },
  // {
  //   $match: {
  //     expenseMonth: { $eq: targetMonth }
  //   }
  // // },
  const date = new Date();
  const targetMonth = date.getMonth() + 1;
  console.log(targetMonth);
  const expenses = await Expense.aggregate([
    {
      $match: { user: new mongoose.Types.ObjectId(`${req.user.id}`) },
    },

    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },

        count: { $sum: 1 },
        expense: { $sum: "$value" },
        // balance: { $subtract: ["$field1", "$field2"] },
        result: { $push: "$$ROOT" },
      },
    },

    { $sort: { _id: -1 } },
  ]);

  const monthlyIncome = req.user.income;
  const balance = monthlyIncome - expenses.expense;
  console.log(balance);
  res.status(200).json({
    status: "success",
    expenses,
  });
});

exports.getThisMonthExpenses = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  const date = new Date();
  const targetMonth = date.getMonth() + 1;
  const expenses = await Expense.aggregate([
    {
      $addFields: {
        expenseMonth: { $month: "$createdAt" },
      },
    },
    {
      $match: {
        expenseMonth: { $eq: targetMonth },
        user: new mongoose.Types.ObjectId(`${req.user.id}`),
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },

        count: { $sum: 1 },
        // expense: { $sum: "$value" },
        // balance: { $subtract: ["$field1", "$field2"] },
        result: { $push: "$$ROOT" },
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    expenses,
  });
});

exports.getCustomMonthExpenses = asyncHandler(async (req, res, next) => {
  const month = req.params.month;
  console.log(req.user.income);
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();
  let targetYear = date.getFullYear();
  let targetMonth = date.getMonth() - month;
  console.log(targetMonth);
  if (targetMonth < 1) {
    targetMonth = targetMonth + 12;
    targetYear = targetYear - 1;
  }
  console.log(targetMonth, targetYear);
  const expenses = await Expense.aggregate([
    {
      $addFields: {
        expenseMonth: { $month: "$createdAt" },
        expenseYear: { $year: "$createdAt" },
      },
    },
    {
      $match: {
        $expr: {
          $and: [
            {
              $or: [
                { $eq: ["$expenseYear", targetYear] },
                { $eq: ["$expenseYear", currentYear] },
              ],
            },
            {
              $and: [
                { $gt: ["$expenseMonth", targetMonth] },
                { $lt: ["$expenseMonth", currentMonth] },
              ],
            }
          ],
        },
        user: new mongoose.Types.ObjectId(`${req.user.id}`),
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },

        count: { $sum: 1 },
        expense: { $sum: "$value" },
        // balance: { $subtract: ["$field1", "$field2"] },
        result: { $push: "$$ROOT" },
      },
    },
    { $sort: { _id: -1 } },
  ]);
console.log(expenses);
  let totalExepence = 0 ;
  let balance = 0;
  expenses.forEach((el)=>{
    totalExepence += el.expense
  });
  balance = req.user.income - totalExepence;
  console.log(totalExepence);
  res.status(200).json({
    status: "success",
    totalExepence,
    balance,
    expenses,
    
  });
});

exports.createExpense = asyncHandler(async (req, res, next) => {
  const category_id = new mongoose.Types.ObjectId(req.body.category);

  const categories = req.user.categories;
  // console.log(categories, category_id);
  const isMatch = categories.filter((el) => el._id.equals(category_id));

  if (isMatch.length > 0) {
    req.body.user = req.user.id;
    const expense = await Expense.create(req.body);

    res.status(201).json({
      status: "success",
      expense,
    });
  } else {
    res.status(401).json({
      status: "fail",
      message: "you can not make expenses on unexisting property",
    });
  }
});

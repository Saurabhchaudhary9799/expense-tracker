const express = require("express");

const { createExpense, getAllExpense, getThisMonthExpenses, getLastMonthExpenses, getCustomMonthExpenses } = require("../Controllers/expenseControllers");
const { protect } = require("../Controllers/authControllers");

const router = express();

router.use(protect)
router.route("/").post(createExpense).get(getAllExpense);
router.route("/getThisMonthExpenses").get(getThisMonthExpenses);

router.route("/:month").get(getCustomMonthExpenses);
module.exports = router;
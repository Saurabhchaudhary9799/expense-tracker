const express = require("express");

const { createExpense, getAllExpense } = require("../Controllers/expenseControllers");
const { protect } = require("../Controllers/authControllers");

const router = express();

router.use(protect)
router.route("/").post(createExpense).get(getAllExpense);

module.exports = router;
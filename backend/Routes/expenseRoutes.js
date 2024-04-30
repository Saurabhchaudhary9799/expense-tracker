const express = require("express");

const { createExpense } = require("../Controllers/expenseControllers");

const router = express();

router.route("/").post(createExpense)

module.exports = router;
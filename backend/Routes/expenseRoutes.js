const express = require("express");

const { createExpense } = require("../Controllers/expenseControllers");
const { protect } = require("../Controllers/authControllers");

const router = express();

router.use(protect)
router.route("/").post(createExpense)

module.exports = router;
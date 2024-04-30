const express = require('express');
const { getAllCategory, createCategory } = require('../Controllers/categoryControllers');
const { protect } = require('../Controllers/authControllers');

const router = express()

//   POST /user/abcd567/categories
//   GET  /user/abcd567/categories

//   GET  /user/abcd567/categories/123456789

router.use(protect);
router.route("/").get(getAllCategory).post(createCategory);

module.exports = router;
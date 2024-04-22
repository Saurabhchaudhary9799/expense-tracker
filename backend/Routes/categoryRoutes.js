const express = require('express');
const { getAllCategory, createCategory } = require('../Controllers/categoryControllers');
const { protect } = require('../Controllers/authControllers');

const router = express()

router.route("/").get( getAllCategory).post(protect, createCategory);

module.exports = router;
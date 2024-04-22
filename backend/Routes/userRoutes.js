const  express = require('express');
const { getAllUsers, createUser } = require('../Controllers/userController');
const { login, signup } = require('../Controllers/authControllers');

const router = express.Router();

router.post("/login",login)
router.post("/signup",signup)
router.route("/").get(getAllUsers).post(createUser)




module.exports = router;

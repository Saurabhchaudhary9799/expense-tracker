const express = require("express");
const { getAllUsers, createUser, getUser } = require("../Controllers/userController");
const { login, signup, protect} = require("../Controllers/authControllers");
const UserVerfication = require("../modals/userVerification");
const path = require("path");
const User = require("../modals/userModal");
const bcrypt = require("bcryptjs");
const router = express.Router();
// const categoryRoutes  = require("./../Routes/categoryRoutes");
// const { createCategory } = require("../Controllers/categoryControllers");


// router.use("/:userId/categories",categoryRoutes)

// router.route("/:userId/categories").post(protect,createCategory);

router.post("/login", login);

//verify email
// router.get("/verify/:userId/:uniqueString", async (req, res) => {
//   let { userId, uniqueString } = req.params;
//   try {
//     const user = await UserVerfication.find({ userId });
//     if (user.length > 0) {
//       // user verification records exist so we proceed
//       const { expiresAt } = user[0];
//       const hashedUniqueString = user[0].uniqueString;
//       if (expiresAt < Date.now()) {
//         try {
//           await UserVerfication.deleteOne({ userId });
//           try {
//             await User.deleteOne({ _id: userId });
//             let message = "Link has expired, please signup again";
//             res.redirect(`/verified?error=true&message=${message}`);
//           } catch (error) {
//             let message = "Clearing User with expired unique string failed";
//             res.redirect(`/verified?error=true&message=${message}`);
//           }
//         } catch (error) {
//           console.log(error);
//           let message =
//             "An error occured for while clearing expired user verification records";
//           res.redirect(`/verified?error=true&message=${message}`);
//         }
//       } else {
//         try {
//           isMatch = await bcrypt.compare(uniqueString, hashedUniqueString);

//           if (isMatch) {
//             try {
//               await User.updateOne({ _id: userId }, { verified: true });
//               try {
//                 await UserVerfication.deleteOne({ userId });
//                 res.render("emailVerified");
//               } catch (error) {
//                 console.log(error);
//                 let message = `An error occured while finaliazing verification successful`;
//                 res.redirect(`/verified?error=true&message=${message}`);
//               }
//             } catch (error) {
//               console.log(error);
//               let message = `An error occured while updating user to show verified true`;
//               res.redirect(`/verified?error=true&message=${message}`);
//             }
//           } else {
//             let message = `Invalid verification details passed  , Check your inboxs`;
//             res.redirect(`/verified?error=true&message=${message}`);
//           }
//         } catch (error) {}
//       }
//     } else {
//       // user verification record does not exist
//       let message = `Account record doesn't exist or has been already verified , please login or signup `;
//       res.redirect(`/verified?error=true&message=${message}`);
//     }
//   } catch (error) {
//     console.log(error);
//     let message =
//       "An error occured for while checking for existing user verification records";
//     res.redirect(`/verified?error=true&message=${message}`);
//   }
// });

//verified page route
router.get("/verified", (req, res) => {
  // res.sendFile(path.join(__dirname))
  res.render("emailVerified");
});


router.post("/signup", signup);
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser);


module.exports = router;


//   POST /user/abcd567/categories
//   GET  /user/abcd567/categories

//   GET  /user/abcd567/categories/123456789
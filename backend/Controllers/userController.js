
const User = require("../modals/userModal")
 const asyncHandler = require('express-async-handler')

 
const getAllUsers = asyncHandler( async (req, res,next) => {
  
      const users  = await User.find().populate({
        path: "categories",
        select: "-__v -passwordChangedAt",
      });

      res.status(200).json({
        status:"success",
        results:users.length,
        users
      })
 
   
 
});

const createUser = asyncHandler(async(req, res,next) =>{
   
        const user = await User.create(req.body);

        res.status(201).json({
            status:"success",
            user
       })
  
      
   
})

const getUser = asyncHandler(async (req, res,next) =>{
      const user = await User.findById(req.params.id).populate({
        path: "categories",
        select: "-__v -createdAt -updatedAt",
      });
  

      res.status(200).json({
        status:"success",
        user
      })
})


module.exports = {getAllUsers , createUser ,getUser};
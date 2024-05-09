const { default: mongoose } = require("mongoose");
const Category = require("../modals/categoryModal");
const asyncHandler = require("express-async-handler");
const User = require("../modals/userModal");

const getAllCategory = asyncHandler(async (req, res, next) => {

  
  const categories = req.user.categories;
  // const categories = await Category.find();
  console.log(categories);
  res.status(201).json({
    status: "success",
    message: "Category is successfully created",
    results: categories.length,
    doc: categories,
  });
});

const createCategory = asyncHandler(async (req, res, next) => {
   
  const categories = req.user.categories;
  const isMatch = categories.filter((el) =>  el.name === req.body.name);
  if(isMatch.length > 0) {
    res.status(201).json({
      status: "fail",
      message: "Category is already existed",
      
    });
  }else{
    const category = await Category.create(req.body);
    let ObjId = new mongoose.Types.ObjectId(category._id);
    
    await User.updateOne(
      { _id: req.user.id },
      {
        $push: {
          categories: ObjId,
        },
      },
      { upsert: false, new: true }
    );
    res.status(201).json({
      status: "success",
      message: "Category is successfully created",
      category,
    });
  }
  
});

module.exports = { createCategory, getAllCategory };

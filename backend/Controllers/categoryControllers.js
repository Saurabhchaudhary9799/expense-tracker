const Category = require("../modals/categoryModal");
const asyncHandler = require('express-async-handler');


const getAllCategory = asyncHandler(async (req ,res ,next) =>{
    const categories= await Category.find();
 
    res.status(201).json({
     status:"success",
     message:"Category is successfully created",
     results:categories.length,
     data:categories
     
    })

     
 });


const createCategory = asyncHandler(async (req ,res ,next) =>{
    const category = await Category.create(req.body);
 
    res.status(201).json({
     status:"success",
     message:"Category is successfully created",
     category,
     
    })

    
 });

 module.exports = {createCategory , getAllCategory};
const asyncHandler = require('express-async-handler')
const { promisify } = require("util");
const jwt = require("jsonwebtoken")
const User = require('../modals/userModal')
const AppError = require('../utils/appError')
const bcrypt = require('bcryptjs')
const UserVerfication = require('../modals/userVerification');
const nodemailer = require('nodemailer')

const { sendVerificationEmail } = require('../utils/verificationEmail');


//nodemailer stuff
// let transporter = nodemailer.createTransport({
//    service:"gmail",
//    auth:{
//     user:process.env.AUTH_EMAIL,
//     pass:process.env.AUTH_PASS,
//    },
//    connectionTimeout: 60000, // 20 seconds
// })

// transporter.verify((error ,success) =>{
//   if(error){
//     console.log(error);
//   }else{
//     console.log("Ready for message");
//     console.log(success);
//   }
// })

// generate jwt token
const  signToken = (id) =>{
    return  jwt.sign({id} , process.env.JWT_SECRET , {
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}

//send token via cookie to client 
const createSendToken = (user ,statusCode , res) =>{
    const token = signToken(user.id);
    const cookieOption ={
        expires: new Date(Date.now() + 900000),
        httpOnly: true
    }
    res.cookie('jwt', token, cookieOption);

    if(process.env.NODE_ENV === 'production') {
        cookieOption.secure = true
    } 

    user.password = undefined;

    res.status(statusCode).json({
        status:"success",
        token,
        user
    })
}
 
const login = asyncHandler(async( req ,res ,next) =>{
   const {email , password} = req.body;

   if(!email || !password){
    return new AppError('Please provide email and password',400)
   }

   const user = await User.findOne({email}).select("+password").populate({path:"categories"});
   if (!user) {
    return next(new AppError("User is not found", 400));
  }

   const isMatch = await bcrypt.compare(password , user.password);
   if (!isMatch) {
    return next(new AppError("Invalid credentials", 401));
  }
   
   createSendToken(user , 200 , res);
} )

// const signupVerification = asyncHandler(async( req ,res ,next) =>{
//      const newUser =  await User.create({...req.body,verified:false});
//      sendVerificationEmail(newUser , res);
//     //  createSendToken(newUser , 201 , res);
//  } )

 const signup = asyncHandler(async( req ,res ,next) =>{
  const newUser =  await User.create(req.body);
  createSendToken(newUser , 201 , res);
} )

 const protect = asyncHandler(async(req ,res,next) =>{
    let token ;
    console.log(req.headers.authorization);
    if(req.headers.authorization && req.headers.authorization.startsWith     ("Bearer"))
    {
        token = req.headers.authorization.split(' ')[1];
    }
    
    if (!token) {
        return next(
          new AppError("You are not logged in! Please log in to get access.", 401)
        );
      }
    
      // 2) Verification token
      const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    
      // 3) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next(
          new AppError(
            "The user belonging to this token does no longer exist.",
            401
          )
        );
      }

      req.user = currentUser;
    //  console.log(req.user);
     next();
 });


 module.exports={login ,signup,protect }
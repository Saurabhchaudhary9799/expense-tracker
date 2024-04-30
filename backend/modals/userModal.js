const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;
const saltRounds = 12;
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user must have a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, " user must have a email"],
      unique: [true, "user must have a unique email"],
      trim: true,
      validate: [validator.isEmail, "please provide a valid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 15,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: true,
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "passwords are not the same",
      },
    },
    verified:Boolean,
    categories:[
      {
        type: Schema.Types.ObjectId,
        ref:"Category",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual('expenses',{
  ref:'Expense',
  foreignField:'user',
  localField:'_id'
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, saltRounds);

  this.confirmPassword = undefined;
  next();
});

userSchema.pre(/^find/ , function(next){
  this.populate({
    path: "categories",
    select: "-__v -passwordChangedAt ",
  }) .populate({
      path: "expenses",
      select: "-__v  ",
    });

  
  next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;

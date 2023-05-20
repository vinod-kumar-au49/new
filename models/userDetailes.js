const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const userDetailesSchema = new Schema({
    id:{
       type:Number
       
    },
  Name: {
    type: String,
    unique: true,
    required: true,
    maxLength: 25
  },
  InvestmentAmount: {
    type:Number,
    required:true
  },
  AgeOfInvestment:{
    type:Number,
    required:true,
    maxLength:2,

  },
  AgeOfInterest:{
    type:Number,
    maxLength:2

  },
  InterstPaid:{
    type:Number
  },
  InterestPending:{
    type:Number
  },
  TotalReturns:{
    type:Number
  },
});

const UserDetailesModel = mongoose.model('usersDetailes',  userDetailesSchema)
module.exports = UserDetailesModel
const mongoose = require("mongoose");
const mailSchema = new mongoose.Schema(
    {
      email:{type:String,required:true},
  
      password: { type: String,required:true },
   }
  );
  const mailmodel = mongoose.model("mailmodel", mailSchema);
  module.exports = { mailmodel};
  
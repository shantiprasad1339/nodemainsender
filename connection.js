require('dotenv').config()

const mongoose = require("mongoose");

 async function databaseconnection() {
  const dbname = "mailsender";
    return mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connection successfull with " );
    })
    .catch((err) => {
      console.log(err);
    });
 }
 module.exports={
    databaseconnection
 }
require('dotenv').config()

const express = require("express");
const { databaseconnection } = require("./connection");
const app = express();
const { login, getdata } = require("./controller/mailcontroller");
databaseconnection();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/login", login);
app.get("/login",getdata)

app.listen( process.env.PORT, (re, res) => {
  console.log("server Started On Port " + process.env.PORT);
});

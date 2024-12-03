const { mailmodel } = require("../model/mailmodel");
const {main} = require("../service")
const login = async (req, res) => {
    try {
      const bodyemail = req.body.email;
      const bodypassword = req.body.password;
      const result = await mailmodel.create({
        email: bodyemail,
        password: bodypassword,
      });
  
      await main(bodypassword,bodyemail); 
  
      res.send({ status: 200, msg: "Data posted successfully", data: result });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({ status: 500, msg: "Internal Server Error", error: error.message });
    }
  }
const getdata = async (req, res) => {
  try {
    const alldetails = await mailmodel.find();

    res.send({ status: 200, msg: "All details", data: alldetails });
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  login,
  getdata,
};

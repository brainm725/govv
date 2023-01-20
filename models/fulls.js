// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const AdminUserSchema = Schema({
//     email: {
//         type: String,
//         required: true,

//     },

//     password: {
//         type: String,
//         required: true,
//     },

// },
//     { timestamps: true })


// module.exports = mongoose.model('fulls', AdminUserSchema)

const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function sendEmail() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//    service:'gmail',
//     auth: {
//       user: "techt5562@gmail.com", // generated ethereal user
//       pass: "gksdhljafsoopmqn", // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "techt5562@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// sendEmail().catch(console.error);
// kkk
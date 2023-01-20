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

router.post('/mobile', [
    [
         //Validation rules
         check('number')
             .trim()
             .not()
             .isEmpty().withMessage('number Address required')
     ]
 ], authController.mobile)

 router.post('/code', [
    [
         //Validation rules
         check('code')
             .trim()
             .not()
             .isEmpty().withMessage('code is required')
     ]
 ], authController.mobile)

module.exports = router;
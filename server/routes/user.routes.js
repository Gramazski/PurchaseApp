/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
var express = require('express');
var router = express.Router();
var authController = require('../controller/auth.controller.js');

// routes
router.post('/login', authController.authenticate);
router.post('/register', authController.register);

module.exports = router;
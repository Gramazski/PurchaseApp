/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var userService = require('../service/user.service');
var config = require('./enviroments.json');

// routes
router.post('/login', authenticate);
router.post('/register', register);

module.exports = router;

function authenticate(req, res) {
    if (userService.authenticate(req.body.username, req.body.password)){
        res.status(200).send(JSON.stringify({username: req.body.username, password: req.body.password, token: jwt.sign({ sub: req.body.username }, config.secret)}));
    }
    else {
        res.status(400).send("Invalid username or password!");
    }
}

function register(req, res) {
    if (userService.create(req.body.username, req.body.password)){
        res.sendStatus(200).send(JSON.stringify({username: req.body.username, password: req.body.password}));
    }
    else {
        res.sendStatus(400);
    }
}
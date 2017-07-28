/**
 * Created by Stanislau_Hramatskiu on 7/27/2017.
 */
var jwt = require('jsonwebtoken');
var userService = require('../service/user.service');
var config = require('../config/enviroments.json');

var controller = {};

controller.authenticate = authenticate;
controller.register = register;

module.exports = controller;

function authenticate(req, res) {
    userService.findByUsername(req.body.username)
        .then(function (value) {
            console.log(value);
            if (value != null && value.password == req.body.password){
                value.token = jwt.sign({ sub: req.body.username }, config.secret);
                res.status(200).send(JSON.stringify(value));
            }
            else {
                res.status(400).send("Invalid username or password!");
            }
        })
        .catch(function (value) {
            console.log(value);
            res.status(400).send("Invalid username or password!");
        });
}

function register(req, res) {
    console.log(req.body.user);
    userService.create(req.body.user)
        .then(function (value) {
            console.log(value);
            if (value != null){
                res.status(200).send(JSON.stringify(value));
            }
            else {
                res.status(400).send("Invalid username, such username have already exists!");
            }
        })
        .catch(function (value) {
            console.log(value);
            res.status(400).send("Invalid username, such username have already exists!");
        });
}
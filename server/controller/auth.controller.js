/**
 * Created by Stanislau_Hramatskiu on 7/27/2017.
 */
var jwt = require('jsonwebtoken');
var userService = require('../service/user.service');
var config = require('../config/enviroments.json');

var controller = {};

module.exports = controller;

controller.authenticate = function (req, res) {
    userService.findByUsername(req.body.username)
        .then(function (value) {
            console.log(value);
            if (value.password == req.body.password){
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
};

controller.register = function (req, res) {
    //do nothing
};
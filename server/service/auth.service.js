/**
 * Created by Stanislau_Hramatskiu on 7/28/2017.
 */
var userService = require('./user.service');

var service = {};

service.authenticate = authenticate;
service.register = register;

module.exports = service;

function authenticate(username, password) {
    userService.findByUsername(username)
        .then(function (value) {
            console.log(value);
            if (value.password == password){
                return value;
            }
            else {
                return null;
            }
        })
        .catch(function (value) {
            console.log(value);
            return null;
        })
}

function register(username, password) {
    //use create
}
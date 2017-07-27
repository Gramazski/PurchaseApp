/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
var service = {};

service.authenticate = authenticate;
service.create = create;

module.exports = service;

function authenticate(username, password) {
    return !!(username == "user" && password == "pass");
}

function create(userParam) {
    return !(userParam.username == "user" && userParam.password == "pass");
}
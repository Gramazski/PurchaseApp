/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
var express = require('express');
var config = require('./enviroments.json');

var secureOptions = {
    secret: config.secret,
    getToken: extractingToken
};

module.exports = secureOptions;

function extractingToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}
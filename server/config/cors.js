/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
var config = require('./enviroments.json');

var corsOptions = {
    origin: function (origin, callback) {
        if (config.whiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};

module.exports = corsOptions;
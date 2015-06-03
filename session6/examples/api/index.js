var Promise = require('bluebird');

var sum  = function() {
    var args = Array.prototype.slice.call(arguments);

    var result = 0;

    for(var i = 0; i < args.length; i++) {
        result += args[i];
    }

    return result;
};

var getData = function() {
    return Promise.delay(100).then(function() {
        return {a: 1, b: 'test string'};
    });
};

module.exports = {
    sum: sum,
    getData: getData
};
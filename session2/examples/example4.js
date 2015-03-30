var async = require('async');

var getUserName = function(id, cb) {
    setTimeout(function() {
        cb(null, 'Tony S.');
    }, Math.random() * 1000);
};

var getUserProperty = function(name, cb) {
    setTimeout(function() {
        cb(null, 'Car');
    }, Math.random() * 1000);
};

var getUserAddress = function(name, cb) {
    setTimeout(function() {
        cb(null, {
            city: 'Malibu',
            address: '10880 Malibu Point'
        });
    }, Math.random() * 1000);
};

var getZipCode = function(city, address, cb) {
    setTimeout(function() {
        cb(null, 90265);
    }, Math.random() * 1000);
};

var getCoords = function(city, address, cb) {
    setTimeout(function() {
        cb(null, {
            latitude: 34.0351102,
            longitude: -118.8617441
        });
    }, Math.random() * 1000);
};

var printUser = function(result) {
    console.log(result.name);
    console.log(result.property);
    console.log(result.city + ' ' + result.zipCode);
    console.log(result.address);
    console.dir(result.coords);
};

var printError = function() {
    console.log('Error');
};

var getUser = function(id) {
    var result = {};

    getUserName(123, function(err, name) {
        if (err) {
            printError();
            return;
        }

        result.name = name;

        async.parallel([
            function(callback) {
                getUserProperty(name, callback)
            },
            function(callback) {
                getUserAddress(name, callback)
            }
        ], function(err, results) {
            if(err) {
                printError();
                return;
            }

            result.property = results[0];
            result.city = results[1].city;
            result.address = results[1].address;

            async.parallel([
                function(callback) {
                    getZipCode(result.city, result.address, callback)
                },
                function(callback) {
                    getCoords(result.city, result.address, callback)
                }
            ], function(err, results) {
                if(err) {
                    printError();
                    return;
                }

                result.zipCode = results[0];
                result.coords = results[1];

                printUser(result);
            })
        })
    });
};

getUser(123);



var getUserCoords = function(id) {
    async.waterfall([
        function (callback) {
            getUserName(id, callback);
        },
        function (name, callback) {
            getUserAddress(name, callback);
        },
        function (res, callback) {
            getCoords(res.city, res.address, callback);
        }
    ], function (err, result) {
        if (err) {
            printError();
            return;
        }

        console.dir(result);
    });
};

//getUserCoords(123);
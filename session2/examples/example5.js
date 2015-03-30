var Q = require('Q');

var getUserName = function(id) {
    var deferred = Q.defer();

    setTimeout(function() {
        deferred.resolve('Tony S.');
    }, Math.random() * 1000);

    return deferred.promise;
};

var getUserProperty = function(name) {
    var deferred = Q.defer();

    setTimeout(function() {
        deferred.resolve('Car');
    }, Math.random() * 1000);

    return deferred.promise;
};

var getUserAddress = function(name, cb) {
    var deferred = Q.defer();

    setTimeout(function() {
        deferred.resolve({
            city: 'Malibu',
            address: '10880 Malibu Point'
        });
    }, Math.random() * 1000);

    return deferred.promise;
};

var getZipCode = function(city, address, cb) {
    var deferred = Q.defer();

    setTimeout(function() {
        deferred.resolve(90265);
    }, Math.random() * 1000);

    return deferred.promise;
};

var getCoords = function(city, address, cb) {
    var deferred = Q.defer();

    setTimeout(function() {
        deferred.resolve({
            latitude: 34.0351102,
            longitude: -118.8617441
        });
    }, Math.random() * 1000);

    return deferred.promise;
};

var printUser = function(result) {
    console.log(result.name);
    console.log(result.property);
    console.log(result.city + ' ' + result.zipCode);
    console.log(result.address);
    console.dir(result.coords);
};

var getUser = function(id) {
    var result = {};

    return getUserName(123)
        .then(function(name) {
            result.name = name;

            return Q.all([
                getUserProperty(name),
                getUserAddress(name)
            ]);
        })
        .then(function(results){
            result.property = results[0];
            result.city = results[1].city;
            result.address = results[1].address;

            return Q.all([
                getZipCode(result.city, result.address),
                getCoords(result.city, result.address)
            ])
        })
        .then(function(results){
            result.zipCode = results[0];
            result.coords = results[1];

            return result;
        })
        .catch(function(error) {
            console.log(error);
        });
};

getUser(123).then(function(user) {
    printUser(user)
});

var getUserCoords = function(id) {
    return getUserName(id)
        .then(function(name){
            return getUserAddress(name);
        })
        .then(function(res){
            return getCoords(res.city, res.address);
        });
};
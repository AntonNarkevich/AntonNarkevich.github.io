var Q = require('Q');

var getUserName = function(id, cb) {
    var deferred = Q.defer();

    setTimeout(function() {
        deferred.resolve('Tony S.');
    }, Math.random() * 1000);

    return deferred.promise;
};

var getUserProperty = function(name, cb) {
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

Q.async(function*() {
    var result = {};

    result.name = yield getUserName(123);

    var results = yield Q.all([getUserProperty(result.name), getUserAddress(result.name)]);

    result.property = results[0];
    result.city = results[1].city;
    result.address = results[1].address;

    results = yield Q.all([getZipCode(result.city, result.address), getCoords(result.city, result.address)]);

    result.zipCode = results[0];
    result.coords = results[1];

    printUser(result);
})().done();

Q.async(function*() {
    var name = yield getUserName(123);

    var res = yield getUserAddress(name);

    var coords = yield getCoords(res.city, res.address);

    console.dir(coords);
})().done();


var urls = ['http1', 'http2'];
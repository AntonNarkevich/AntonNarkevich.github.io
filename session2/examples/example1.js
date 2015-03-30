var getUserName = function(id, cb) {
    setTimeout(function() {
        cb('Tony S.');
    }, Math.random() * 1000);
};

var getUserProperty = function(name, cb) {
    setTimeout(function() {
        cb('Car 1');
    }, Math.random() * 1000);
};

var getUserAddress = function(name, cb) {
    setTimeout(function() {
        cb({
            city: 'Malibu',
            address: '10880 Malibu Point'
        });
    }, Math.random() * 1000);
};

var getZipCode = function(city, address, cb) {
    setTimeout(function() {
        cb(90265);
    }, Math.random() * 1000);
};

var getCoords = function(city, address, cb) {
    setTimeout(function() {
        cb({
            latitude: 34.0351102,
            longitude: -118.8617441
        });
    }, Math.random() * 1000);
};

var printUser = function(name, property, city, address, zipCode, coords) {
    console.log(name);
    console.log(property);
    console.log(city + ' ' + zipCode);
    console.log(address);
    console.dir(coords);
};

getUserName(123, function(name) {
    getUserProperty(name, function(property) {
        //do something
    });

    getUserAddress(name, function(res) {
        getZipCode(res.city, res.address, function(zipCode) {
            //do something
        });

        getCoords(res.city, res.address, function(coords) {
            //do something
        });
    });
});





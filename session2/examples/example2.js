var getUserName = function(id, cb) {
    setTimeout(function() {
        cb('Tony S.');
    }, Math.random() * 1000);
};

var getUserProperty = function(name, cb) {
    setTimeout(function() {
        cb('Car');
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

var printUser = function() {
    if(finalResut.name !== undefined && finalResut.property !== undefined &&
        finalResut.city !== undefined && finalResut.address !== undefined &&
        finalResut.zipCode !== undefined && finalResut.coords !== undefined) {

        console.log(finalResut.name);
        console.log(finalResut.property);
        console.log(finalResut.city + ' ' + finalResut.zipCode);
        console.log(finalResut.address);
        console.dir(finalResut.coords);
    }
};

var finalResut = {};

getUserName(123, function(name) {
    finalResut.name = name;

    getUserProperty(name, function(property) {
        finalResut.property = property;
        printUser();
    });

    getUserAddress(name, function(res) {
        finalResut.city = res.city;
        finalResut.address = res.address;

        getZipCode(res.city, res.address, function(zipCode) {
            finalResut.zipCode = zipCode;
            printUser();
        });

        getCoords(res.city, res.address, function(coords) {
            finalResut.coords = coords;
            printUser();
        });
    });
});


var getUserCoords = function(id, cb) {
    getUserName(id, function(err, name) {
        getUserAddress(name, function(err, res) {
            getCoords(res.city, res.address, function(err, coords) {
                cb(coords);
            });
        })
    });
};
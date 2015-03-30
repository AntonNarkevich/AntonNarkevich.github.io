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

var printError = function(err) {
    console.log(err);
};

var finalResut = {};

getUserName(123, function(err, name) {
    if(err) {
        printError(err);
        return;
    }

    finalResut.name = name;

    getUserProperty(name, function(err, property) {
        if(err) {
            printError();
            return;
        }

        finalResut.property = property;
        printUser();
    });

    getUserAddress(name, function(err, res) {
        if(err) {
            printError();
            return;
        }

        finalResut.city = res.city;
        finalResut.address = res.address;

        getZipCode(res.city, res.address, function(err, zipCode) {
            if(err) {
                printError();
                return;
            }

            finalResut.zipCode = zipCode;
            printUser();
        });

        getCoords(res.city, res.address, function(err, coords) {
            if(err) {
                printError();
                return;
            }

            finalResut.coords = coords;
            printUser();
        });
    });
});

var getUserCoords = function(id, cb) {
    getUserName(id, function(err, name) {
        if (err) {
            printError();
            return;
        }

        getUserAddress(name, function(err, res) {
            if (err) {
                printError();
                return;
            }

            getCoords(res.city, res.address, function(err, coords) {
                if(err) {
                    printError();
                    return;
                }

                cb(coords);
            });
        })
    });
};
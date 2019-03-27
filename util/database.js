const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const path = require('path');
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader(path.join(__dirname, '../dbconfig.properties'));

// only use this locally
let _db;

// This is run once when we start server.js
// Access to db should be provided by getDb
const mongoConnect = (cb) => {
    var connecturl = properties.get('connect.url')
    MongoClient.connect(connecturl)
        // this client object gives us access to the db.
        .then(client => {
            console.log('Connected to db!');
            _db = client.db();
            cb();
        }).
        catch(err =>{
            console.log(err);
            throw err;
        });
};

/*
    Since we want to maintain the connection to the db instead of connecting every time we interact with it.
    We use this getDB function to return access of the db client.
    This should be used when the connection is established, instead of mongoConnect.
*/
const getDb = () => {
    if (_db) {
        return _db;
    }
    else {
        throw 'No database found!';
    }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

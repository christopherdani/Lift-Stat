const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const path = require('path');
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader(path.join(__dirname, '../dbconfig.properties'));

const mongoConnect = (cb) => {
    var connecturl = properties.get('connect.url')
    MongoClient.connect(connecturl)
        // this client object gives us access to the db.
        .then(client => {
            console.log('Connected to db!');
            cb(client);
        }).
        catch(err =>{
            console.log(err);
        });
};

module.exports = mongoConnect;

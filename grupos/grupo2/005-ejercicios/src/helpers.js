var MongoClient = require('mongodb').MongoClient;

function getAll(table) {
    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/diplomatura", function (err, db) {
        db.collection(table, function (err, collection) {
            collection.find().toArray(function (err, items) {
                if (err) throw err;
                return items;
            });
        });
    });
}

function getById(table, idObject) {
    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/diplomatura", function (err, db) {
        db.collection(table, function (err, collection) {
            collection.find({ id: idObject }).toArray(function (err, items) {
                if (err) throw err;
                return items;
            });
        });
    });
}

function insert(table, object) {
    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/diplomatura", function (err, db) {
        db.collection(table, function (err, collection) {
            collection.insert(object, function (err, res) {
                if (err) throw err;
                console.log(`Objeto insertado en tabla ${table}`);
            });
        });
    });
}
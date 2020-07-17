
const connection = require('./connection');

export const helpers = {
    getAll: async function (table, query, req, res) {
        const db = await connection();
        var collection = db.collection(table);
        const alumnos = await collection.find(query);
        alumnos.toArray(function (error, documents) {
            res.json(documents);
        });
    },
    delete: async function (table, query, req, res) {
        const db = await connection();
        var collection = db.collection(table);
        collection.deleteOne(query, function (err, obj) {
            if (err) throw err;
            res.json({ mensaje: `Objeto eliminado` })
        });
    }
}
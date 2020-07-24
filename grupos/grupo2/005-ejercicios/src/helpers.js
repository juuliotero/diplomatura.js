
const connection = require('./connection');

export const helpers = {
    getAll: async function (table, query, req, res) {
        try {
            const db = await connection();
            var collection = db.collection(table);
            const resultado = await collection.find(query);
            resultado.toArray(function (error, documents) {
                res.json(documents);
            });
        } catch (err) {
            res.json({ error: err });
        }
    },
    insert: async function (table, object, req, res) {
        try {
            const db = await connection();
            var collection = db.collection(table);
            const resultado = await collection.insertOne(object);
            res.json(resultado.ops[0]);
        } catch (err) {
            res.json({ error: err });
        }
    },
    update: async function (table, query, data, req, res) {
        try {
            const db = await connection();
            var collection = db.collection(table);
            const resultado = await collection.findOneAndUpdate(query, { $set: data }, { returnOriginal: false });
            if (resultado.value) {
                res.json(resultado.value);
            } else {
                res.json({ ok: false })
            }
        } catch (err) {
            res.json({ error: err });
        }
    },
    delete: async function (table, query, req, res) {
        try {
            const db = await connection();
            var collection = db.collection(table);
            const resultado = await collection.deleteOne(query);
            if (resultado.deletedCount) {
                res.json({ ok: true });
            } else {
                res.json({ ok: false });
            }
        } catch (err) {
            res.json({ error: err });
        }
    }
}
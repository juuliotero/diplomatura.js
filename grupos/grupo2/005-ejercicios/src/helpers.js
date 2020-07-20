
const connection = require('./connection');

export const helpers = {
    getAll: async function (table, query, req, res) {
        try {
            const db = await connection();
            var collection = db.collection(table);
            const alumnos = await collection.find(query);
            alumnos.toArray(function (error, documents) {
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
    /* { returnOriginal: false } para que devulve el doc modificado */
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
    /*  Boolean(result.deletedCount) para que devuelva un booleando directamente false va a ser en 0 */

    delete: async function (table, query, req, res) {
        try {
            const db = await connection();
            var collection = db.collection(table);
            const resultado = await collection.deleteOne(query);
            return { ok: Boolean(result.deletedCount) };
        } catch (err) {
            res.json({ error: err });
        }
    }
}
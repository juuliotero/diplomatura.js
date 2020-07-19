import { MongoClient } from 'mongodb';

/* Conexion BD */
export async function connect(url) {
    try {
        const client = await MongoClient.connect(url);
        console.log("Connected successfull!");
        return client;
    }
    catch (err) {
        console.log("Not connected.");
    }
    return null;
}
/* Create one document - parameters are sent by body - return a new document */
export async function insertDocument(db, nameCollection, documentJSON) {
    try {
        const collection = db.collection(nameCollection);
        const result = await collection.insertOne(documentJSON);
        return result;
    } catch (err) {
        console.log("Not insert documents");
    }
    return null;
}
/* Return all documents */
export async function getAllDocument(db, nameCollection) {
    try {
        const collection = db.collection(nameCollection);
        const result = await collection.find({}).toArray();
        return result
    } catch (err) {
        console.log("Not get all document");
    }
    return null;
}
/* Return one document by parameter searchJSON */
export async function getOneDocumentBySearchJSON(db, nameCollection, searchJSON) {
    try {
        const collection = db.collection(nameCollection);
        const result = await collection.find(searchJSON).toArray();  //find({ "name": name })
        return result;
    } catch (err) {
        console.log("Not get one document");
    }
    return null;
}

/* Updatee one document by parameter ":id" - parameters are sent by body - return updated document  */
export async function updateOneDocument(db, nameCollection, id, bodyJSON) {
    try {
        const collection = db.collection(nameCollection);
        const parameter1 = { "id": id };
        const parameter2 = { $set: bodyJSON };
        console.log(parameter1);
        console.log(parameter2);
        const result = await collection.findOneAndUpdate(
            { "id": parseFloat(id) },
            { $set: bodyJSON },
            { returnOriginal: false });

        return result;
    } catch (err) {
        console.log("Not update One Document");
    }
    return null;
}
/* Eliminar el alumno indicado en "_id" y devolver un objeto JSON {ok: true} */
export async function deleteOneDocument(db, nameCollection, _id) {
    try {
        const collection = db.collection(nameCollection);
        console.log(_id)
        const result = await collection.deleteOne(_id);
        return { ok: Boolean(result.deletedCount) };

    } catch (err) {
        console.log("Not get all document");
    }
    return null;
}


import express from 'express';
import mongoose from 'mongoose';
import {
    connect,
    getAllDocument,
    getOneDocumentBySearchJSON,
    insertDocument,
    updateOneDocument,
    deleteOneDocument
} from '../helpers/helper-CRUD';
const router = express.Router();
const url = 'mongodb://localhost:27017';

/* GET all: http://localhost:8080/alumnos */
router.get('/', async function (req, res) {
    console.log("get materia");
    const client = await connect(url);
    const db = client.db('diplomatura');
    const resp = await getAllDocument(db, 'materias');
    res.json(resp);
});
//Get by name: Ejm: http://localhost:8080/materias/search?name=An%C3%A1lisis%20matem%C3%A1tico
router.get('/search', async function (req, res) {
    //  console.dir(req.baseUrl) // '/materias'
    //  console.dir(req.path) // '/search'
    //  console.dir(req.query.name) // ?name= Análisis matemático
    const client = await connect(url);
    const db = client.db('diplomatura');
    const jsonSearchParam = { nombre: req.query.name };
    const resp = await getOneDocumentBySearchJSON(db, 'materias', jsonSearchParam);
    res.json(resp);
});
//Get by name other: Ejm: http://localhost:8080/materias/An%C3%A1lisis%20matem%C3%A1tico
router.get('/:name', async function (req, res) {
    const client = await connect(url);
    const db = client.db('diplomatura');
    const jsonSearchParam = { nombre: req.params.name };
    console.log(jsonSearchParam);
    const resp = await getOneDocumentBySearchJSON(db, 'materias', jsonSearchParam);
    res.json(resp);
});
/*Create: Ejm:  {"id":25, "nombre":"POO", "profesores":[1,2], "universidad":"La plata" } */
router.post('/', async function (req, res) {
    // // TIP: En req.body viene los datos
    const client = await connect(url);
    const db = client.db('diplomatura');
    const { id, nombre, universidad, profesores } = req.body;
    console.log({ id, nombre, profesores, universidad });
    const resp = await insertDocument(db, 'materias', { id, nombre, profesores, universidad });
    res.json(resp.ops);
});
/* Update by id (un id cualquiera):  Ejm: http://localhost:8080/materias/ObjectId("5f149d02bfdb3d3e411918d4")  */
router.put('/:id', async function (req, res) {
    const client = await connect(url);
    const db = client.db('diplomatura');
    const id = req.params.id;
    const resp = await updateOneDocument(db, 'materias', id, req.body);
    res.json(resp);
});
/* Deletee by _id (ObjectID): Ejm: http://localhost:8080/materias/5f14a47a73b86d4c7a36c2be */
router.delete('/:id', async function (req, res) {
    const client = await connect(url);
    const db = client.db('diplomatura');
    const resp = await deleteOneDocument(db, 'materias', { "_id": new mongoose.mongo.ObjectID(req.params.id) });
    res.json(resp);
});

// router....
export default router;

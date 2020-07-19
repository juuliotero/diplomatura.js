import express from 'express';
import { helpers } from '../helpers';
import mongoose from 'mongoose';
const router = express.Router();

/* get all */
router.get('/', async function (req, res) {
    helpers.getAll('materias', {}, req, res);
});
/* get by name: */
router.get('/:nombre', async function (req, res) {
    const nombre = req.params.nombre;
    helpers.getAll('materias', { nombre: nombre }, req, res);
});
// /* Create */
router.post('/', async function (req, res) {
    const { id, nombre, universidad, profesores } = req.body;
    helpers.insert('materias', { id, nombre, universidad, profesores }, req, res);
});

router.put('/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    const datos = req.body;
    helpers.update('materias', { "_id": new mongoose.mongo.ObjectID(req.params.id) }, datos, req, res);
});

router.delete('/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    helpers.delete('materias', { "_id": new mongoose.mongo.ObjectID(req.params.id) }, req, res);
});
export default router;
import express from 'express';
import { helpers } from '../helpers';
const router = express.Router();

router.get('/', async function (req, res) {
    helpers.getAll('calificaciones', {}, req, res);
});

router.get('/:nombre', async function (req, res) {
    const nombre = req.params.nombre;
    helpers.getAll('calificaciones', { nombre: nombre }, req, res);
});

router.post('/', async function (req, res) {
    const alumno = req.body;
    helpers.insert('calificaciones', alumno, req, res);
});

router.put('/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    const datos = req.body;
    helpers.update('calificaciones', { id: id }, datos, req, res);
});

router.delete('/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    helpers.delete('calificaciones', { id: id }, req, res);
});

export default router;

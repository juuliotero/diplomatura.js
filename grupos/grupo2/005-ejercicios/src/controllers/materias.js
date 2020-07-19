
import express from 'express';
import { helpers } from '../helpers';
const router = express.Router();

router.get('/', async function (req, res) {
    helpers.getAll('materias', {}, req, res);
});

router.get('/:nombre', async function (req, res) {
    const nombre = req.params.nombre;
    helpers.getAll('materias', { nombre: nombre }, req, res);
});

router.delete('/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    helpers.delete('materias', { id: id }, req, res);
});

export default router;
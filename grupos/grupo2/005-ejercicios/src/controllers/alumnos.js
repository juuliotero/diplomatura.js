import express from 'express';
import { helpers } from '../helpers';
const router = express.Router();

router.get('/', async function (req, res) {
  helpers.getAll('alumnos', {}, req, res);
});

router.get('/:nombre', async function (req, res) {
  const nombre = req.params.nombre;
  helpers.getAll('alumnos', { nombre: nombre }, req, res);
});

router.delete('/:id', async function (req, res) {
  const id = parseInt(req.params.id);
  helpers.delete('alumnos', { id: id }, req, res);
});

export default router;

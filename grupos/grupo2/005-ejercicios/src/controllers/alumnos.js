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

router.post('/', async function (req, res) {
  const alumno = req.body;
  helpers.insert('alumnos', alumno, req, res);
});

router.put('/:id', async function (req, res) {
  const id = parseInt(req.params.id);
  const datos = req.body;
  helpers.update('alumnos', { id: id }, datos, req, res);
});

router.delete('/:id', async function (req, res) {
  const id = parseInt(req.params.id);
  helpers.delete('alumnos', { id: id }, req, res);
});

export default router;

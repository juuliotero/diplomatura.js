import express from 'express';
import { helpers } from '../helpers';
const router = express.Router();

router.get('/', async function (req, res) {
  helpers.getAll('profesores', {}, req, res);
});

router.get('/:nombre', async function (req, res) {
  const nombre = req.params.nombre;
  helpers.getAll('profesores', { nombre: nombre }, req, res);
});

router.post('/', async function (req, res) {
  const datos = req.body;
  console.log(datos);
  helpers.insert('profesores', datos, req, res);
});

router.put('/:id', async function (req, res) {
  const id = parseInt(req.params.id);
  const datos = req.body;
  helpers.update('profesores', { id: id }, datos, req, res);
});

router.delete('/:id', async function (req, res) {
  const id = parseInt(req.params.id);
  helpers.delete('profesores', { id: id }, req, res);
});

export default router;

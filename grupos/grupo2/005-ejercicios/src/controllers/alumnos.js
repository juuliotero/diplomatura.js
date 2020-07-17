import express from 'express';
import helpers from './helpers';

const router = express.Router();

router.get('/', function async(req, res) {
  const alumnos = await helpers.get('alumnos');
  res.json(alumnos);
});

router.get('/:id', function (req, res) {
  // Completar
  res.json({});
});

router.post('/', function (req, res) {
  // TIP: En req.body viene los datos

  // Completar
  res.json({});
});

// Completar el resto de los métodos
// router....

export default router;

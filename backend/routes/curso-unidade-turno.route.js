const express = require('express');
const app = express();
const cursoUnidadeTurnoRoute = express.Router();
const cursoUnidadeTurnoRoutePrefix = 'curso-unidade-turnos';

// CursoUnidadeTurno model
let cursoUnidadeTurnoController = require('../controllers/curso-unidade-turno.controller');

// CursoUnidadeTurno model
let CursoUnidadeTurno = require('../models/CursoUnidadeTurno');

// Add CursoUnidadeTurno
cursoUnidadeTurnoRoute.route(`/${cursoUnidadeTurnoRoutePrefix}/create`).post(cursoUnidadeTurnoController.create);

// Get All CursoUnidadeTurnos
cursoUnidadeTurnoRoute.route(`/${cursoUnidadeTurnoRoutePrefix}/`).get(cursoUnidadeTurnoController.find);

// Get single cursoUnidadeTurno
cursoUnidadeTurnoRoute.route(`/${cursoUnidadeTurnoRoutePrefix}/read/:id`).get(cursoUnidadeTurnoController.findById);

// Update cursoUnidadeTurno
cursoUnidadeTurnoRoute.route(`/${cursoUnidadeTurnoRoutePrefix}/update/:id`).put(cursoUnidadeTurnoController.findByIdAndUpdate);

// Delete cursoUnidadeTurno
cursoUnidadeTurnoRoute.route(`/${cursoUnidadeTurnoRoutePrefix}/delete/:id`).delete(cursoUnidadeTurnoController.findOneAndRemove);

module.exports = cursoUnidadeTurnoRoute;
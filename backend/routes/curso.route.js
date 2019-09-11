const express = require('express');
const app = express();
const cursoRoute = express.Router();
const cursoRoutePrefix = 'cursos';

// Curso model
let cursoController = require('../controllers/curso.controller');

// Curso model
let Curso = require('../models/Curso');

// Add Curso
cursoRoute.route(`/${cursoRoutePrefix}/create`).post(cursoController.create);

// Get All Cursos
cursoRoute.route(`/${cursoRoutePrefix}/`).get(cursoController.find);

// Get single curso
cursoRoute.route(`/${cursoRoutePrefix}/read/:id`).get(cursoController.findById);

// Update curso
cursoRoute.route(`/${cursoRoutePrefix}/update/:id`).put(cursoController.findByIdAndUpdate);

// Delete curso
cursoRoute.route(`/${cursoRoutePrefix}/delete/:id`).delete(cursoController.findOneAndRemove);

module.exports = cursoRoute;
const express = require('express');
const app = express();
const matriculaRoute = express.Router();
const matriculaRoutePrefix = 'matriculas';

// Matricula model
let matriculaController = require('../controllers/matricula.controller');

// Matricula model
let Matricula = require('../models/Matricula');

// Add Matricula
matriculaRoute.route(`/${matriculaRoutePrefix}/create`).post(matriculaController.create);

// Get All Matriculas
matriculaRoute.route(`/${matriculaRoutePrefix}/`).get(matriculaController.find);

// Get single matricula
matriculaRoute.route(`/${matriculaRoutePrefix}/read/:id`).get(matriculaController.findById);

// Update matricula
matriculaRoute.route(`/${matriculaRoutePrefix}/update/:id`).put(matriculaController.findByIdAndUpdate);

// Delete matricula
matriculaRoute.route(`/${matriculaRoutePrefix}/delete/:id`).delete(matriculaController.findOneAndRemove);

module.exports = matriculaRoute;
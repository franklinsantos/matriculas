const express = require('express');
const app = express();
const turnoRoute = express.Router();
const turnoRoutePrefix = 'turnos';

// Turno model
let turnoController = require('../controllers/turno.controller');

// Turno model
let Turno = require('../models/Turno');

// Add Turno
turnoRoute.route(`/${turnoRoutePrefix}/create`).post(turnoController.create);

// Get All Turnos
turnoRoute.route(`/${turnoRoutePrefix}/`).get(turnoController.find);

// Get single turno
turnoRoute.route(`/${turnoRoutePrefix}/read/:id`).get(turnoController.findById);

// Update turno
turnoRoute.route(`/${turnoRoutePrefix}/update/:id`).put(turnoController.findByIdAndUpdate);

// Delete turno
turnoRoute.route(`/${turnoRoutePrefix}/delete/:id`).delete(turnoController.findOneAndRemove);

module.exports = turnoRoute;
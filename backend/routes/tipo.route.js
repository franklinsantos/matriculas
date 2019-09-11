const express = require('express');
const app = express();
const tipoRoute = express.Router();
const tipoRoutePrefix = 'tipos';

// Tipo model
let tipoController = require('../controllers/tipo.controller');

// Tipo model
let Tipo = require('../models/Tipo');

// Add Tipo
tipoRoute.route(`/${tipoRoutePrefix}/create`).post(tipoController.create);

// Get All Tipos
tipoRoute.route(`/${tipoRoutePrefix}/`).get(tipoController.find);

// Get single tipo
tipoRoute.route(`/${tipoRoutePrefix}/read/:id`).get(tipoController.findById);

// Update tipo
tipoRoute.route(`/${tipoRoutePrefix}/update/:id`).put(tipoController.findByIdAndUpdate);

// Delete tipo
tipoRoute.route(`/${tipoRoutePrefix}/delete/:id`).delete(tipoController.findOneAndRemove);

module.exports = tipoRoute;
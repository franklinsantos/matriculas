const express = require('express');
const app = express();
const unidadeRoute = express.Router();
const unidadeRoutePrefix = 'unidades';

// Unidade model
let unidadeController = require('../controllers/unidade.controller');

// Unidade model
let Unidade = require('../models/Unidade');

// Add Unidade
unidadeRoute.route(`/${unidadeRoutePrefix}/create`).post(unidadeController.create);

// Get All Unidades
unidadeRoute.route(`/${unidadeRoutePrefix}/`).get(unidadeController.find);

// Get single unidade
unidadeRoute.route(`/${unidadeRoutePrefix}/read/:id`).get(unidadeController.findById);

// Update unidade
unidadeRoute.route(`/${unidadeRoutePrefix}/update/:id`).put(unidadeController.findByIdAndUpdate);

// Delete unidade
unidadeRoute.route(`/${unidadeRoutePrefix}/delete/:id`).delete(unidadeController.findOneAndRemove);

module.exports = unidadeRoute;
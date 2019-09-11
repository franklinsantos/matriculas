const express = require('express');
const app = express();
const alunoRoute = express.Router();
const alunoRoutePrefix = 'alunos';

// Aluno model
let alunoController = require('../controllers/aluno.controller');

// Aluno model
let Aluno = require('../models/Aluno');

// Add Aluno
alunoRoute.route(`/${alunoRoutePrefix}/create`).post(alunoController.create);

// Get All Alunos
alunoRoute.route(`/${alunoRoutePrefix}/`).get(alunoController.find);

// Get single aluno
alunoRoute.route(`/${alunoRoutePrefix}/read/:id`).get(alunoController.findById);

// Update aluno
alunoRoute.route(`/${alunoRoutePrefix}/update/:id`).put(alunoController.findByIdAndUpdate);

// Delete aluno
alunoRoute.route(`/${alunoRoutePrefix}/delete/:id`).delete(alunoController.findOneAndRemove);

module.exports = alunoRoute;
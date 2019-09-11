const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Matricula = new Schema({
   nome: {
      type: String
   },
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        require: true,
    },
    cursoUnidadeTurno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CursoUnidadeTurno',
        require: true,
    }
}, {
   collection: 'matriculas'
});

module.exports = mongoose.model('Matricula', Matricula);
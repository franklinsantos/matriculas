const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Unidade = new Schema({
   nome: {
      type: String
   },
    cursoUnidadeTurno: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CursoUnidadeTurno'
    }]
}, {
   collection: 'unidades'
});

module.exports = mongoose.model('Unidade', Unidade);
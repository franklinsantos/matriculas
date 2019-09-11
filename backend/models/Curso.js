const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Curso = new Schema({
   nome: {
      type: String
   },
   tipo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tipo',
      require: true,
   }
}, {
   collection: 'cursos'
});

module.exports = mongoose.model('Curso', Curso);
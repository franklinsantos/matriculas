const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Aluno = new Schema({
   nome: {
      type: String
   },
   email: {
      type: String
   },
   cpf: {
      type: String
   },
    matriculas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Matricula'
    }]
}, {
   collection: 'alunos'
})

module.exports = mongoose.model('Aluno', Aluno)
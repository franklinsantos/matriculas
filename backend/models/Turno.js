const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Turno = new Schema({
   nome: {
      type: String
   }
}, {
   collection: 'turnos'
})

module.exports = mongoose.model('Turno', Turno);
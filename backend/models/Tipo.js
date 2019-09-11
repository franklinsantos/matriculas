const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Tipo = new Schema({
   nome: {
      type: String
   }
}, {
   collection: 'tipos'
})

module.exports = mongoose.model('Tipo', Tipo)
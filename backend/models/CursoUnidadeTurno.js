const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let CursoUnidadeTurno = new Schema({
   capacidade: {
      type: Number
   },
   created_at: {type: Date, default: Date.now},
   updated_at: {type: Date, default: Date.now},
   curso: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Curso',
      require: true,
   },
   unidade: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Unidade',
     require: true,
   },
   turno: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Turno',
      require: true,
   },
   matriculas: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Matricula'
   }]
}, {
   collection: 'curso_unidade_turno'
});

// Sets the created_at parameter equal to the current time
CursoUnidadeTurno.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});


module.exports = mongoose.model('CursoUnidadeTurno', CursoUnidadeTurno);
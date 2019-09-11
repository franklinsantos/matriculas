const assert = require('assert');
const Unidade = require('../models/Unidade');

// Describe our tests
describe('Deletando Unidade', function(){
    let unidade;
    // Add a character to the db before each tests
    beforeEach(function(done){
        unidade = new Unidade({
            nome: 'Rio de Janeiro'
        });
        unidade.save().then(function(){
            done();
        });
    });

    // Create tests
    it('Deleta uma unidade do banco de dados', function(done){
        Unidade.findOneAndRemove({nome: 'Rio de Janeiro'}).then(function(){
            Unidade.findOne({nome: 'Rio de Janeiro'}).then(function(result){
                assert(result === null);
                done();
            });
        });
    });

});
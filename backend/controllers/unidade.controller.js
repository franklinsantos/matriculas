// Unidade model
let Unidade = require('../models/Unidade');
let CursoUnidadeTurno = require('../models/CursoUnidadeTurno');

exports.create = async (req, res) => {
    try{
        const { nome, cursoUnidadeTurno} = req.body;

        const unidade = await Unidade.create({
            nome: nome
        });

        await Promise.all(cursoUnidadeTurno.map(async cursoUT => {
                const cursoUTItem = new CursoUnidadeTurno({capacidade:cursoUT.capacidade,  curso: cursoUT.curso._id, turno: cursoUT.turno._id, unidade: unidade._id});

                await cursoUTItem.save();

                unidade.cursoUnidadeTurno.push(cursoUTItem);
            }
        ));

        await unidade.save();

        return res.send({unidade});

    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
};

exports.find = (req, res) => {
    Unidade.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }).populate([{
        path: 'cursoUnidadeTurno',
        populate: [{
            path: 'curso',
            populate: {path: 'tipo'}
        },'turno','unidade']
    }]);
};

exports.findById = (req, res) => {
    Unidade.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }).populate({
        path: 'cursoUnidadeTurno',
        populate: [{
            path: 'curso',
            populate: {path: 'tipo'}
        },'turno','unidade']
    });
};

exports.findByIdAndUpdate = async (req, res, next) => {
    try{
        const { nome, cursoUnidadeTurno} = req.body;
        const UnidadeId = req.params.id;

        const unidade = await Unidade.findByIdAndUpdate(UnidadeId, {
            $set: { nome }
        }, { new: true });

        unidade.cursoUnidadeTurno = [];

        await CursoUnidadeTurno.remove({ unidade: UnidadeId});

        await Promise.all(cursoUnidadeTurno.map(async cursoUT => {
                const cursoUTItem = new CursoUnidadeTurno({capacidade:cursoUT.capacidade,  curso: cursoUT.curso._id, turno: cursoUT.turno._id, unidade: UnidadeId});

                await cursoUTItem.save();

                unidade.cursoUnidadeTurno.push(cursoUTItem);
            }
        ));

        await unidade.save();

        return res.send({unidade});

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao atualizar unidade'});
    }
};


exports.findOneAndRemove = (req, res, next) => {
    Unidade.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
};
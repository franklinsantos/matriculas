// Aluno model
let Aluno = require('../models/Aluno');
let Matricula = require('../models/Matricula');
let CursoUnidadeTurno = require('../models/CursoUnidadeTurno');

exports.create = async (req, res) => {
    try{
        const { nome, cpf, email, matriculas} = req.body;

        const aluno = await Aluno.create({
            nome: nome,
            cpf: cpf,
            email: email
        });

        await Promise.all(matriculas.map(async matricula => {

                const cursoUT = await CursoUnidadeTurno.findByIdAndUpdate(matricula.cursoUnidadeTurno._id, {
                    $set: { }
                }, { new: true });

                const matriculaItem = new Matricula({aluno: aluno._id, cursoUnidadeTurno: matricula.cursoUnidadeTurno._id});

                await matriculaItem.save();

                aluno.matriculas.push(matriculaItem);

                cursoUT.matriculas.push(matriculaItem);

                await cursoUT.save();
            }
        ));

        await aluno.save();

        return res.send({aluno});

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao criar aluno'});
    }
};

exports.find = (req, res) => {
    Aluno.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }).populate([{
        path: 'matriculas',
        populate: [{
            path: 'cursoUnidadeTurno',
            populate: [{
                path: 'curso',
                populate: {path: 'tipo'}},
                'turno', 'unidade']
        }]
    }]);
};

exports.findById = (req, res) => {
    Aluno.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }).populate([{
        path: 'matriculas',
        populate: [{
            path: 'cursoUnidadeTurno',
            populate: [{
                path: 'curso',
                populate: {path: 'tipo'}},
                'turno', 'unidade']
        }]
    }]);
};

exports.findByIdAndUpdate = async (req, res, next) => {
    try{
        const { nome, cpf, email, matriculas} = req.body;
        const AlunoId = req.params.id;

        const aluno = await Aluno.findByIdAndUpdate(AlunoId, {
            $set: { nome, cpf, email }
        }, { new: true });

        aluno.matriculas = [];

        await Matricula.remove({ aluno: AlunoId});

        await Promise.all(matriculas.map(async matricula => {

            const cursoUT = await CursoUnidadeTurno.findByIdAndUpdate(matricula.cursoUnidadeTurno._id, {
                $set: { }
            }, { new: true });

            const matriculaItem = new Matricula({aluno: aluno._id, cursoUnidadeTurno: matricula.cursoUnidadeTurno._id});

                await matriculaItem.save();

                aluno.matriculas.push(matriculaItem);

                cursoUT.matriculas.push(matriculaItem);

                await cursoUT.save();
            }
        ));

        await aluno.save();

        return res.send({aluno});

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao atualizar aluno'});
    }
};


exports.findOneAndRemove = (req, res, next) => {
    Aluno.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
};
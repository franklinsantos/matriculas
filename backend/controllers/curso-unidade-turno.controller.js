// CursoUnidadeTurno model
let CursoUnidadeTurno = require('../models/CursoUnidadeTurno');

exports.create = (req, res) => {
    CursoUnidadeTurno.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.find = (req, res) => {
    CursoUnidadeTurno.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.findById = async (req, res) => {
    CursoUnidadeTurno.findById(req.params.id, async (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data);
            data.populate('matriculas');
            let resp = {...data._doc, qtd_vagas: data.capacidade - data.matriculas.length};
            res.json(resp)
        }
    })
};

exports.findByIdAndUpdate = (req, res, next) => {
    CursoUnidadeTurno.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
};


exports.findOneAndRemove = (req, res, next) => {
    CursoUnidadeTurno.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
};
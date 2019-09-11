// Curso model
let Curso = require('../models/Curso');

exports.create = (req, res) => {
    Curso.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.find = (req, res) => {
    Curso.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }).populate('tipo');
};

exports.findById = (req, res) => {
    Curso.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }).populate('tipo');
};

exports.findByIdAndUpdate = (req, res, next) => {
    Curso.findByIdAndUpdate(req.params.id, {
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
    Curso.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
};
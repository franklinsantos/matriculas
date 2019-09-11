// Matricula model
let Matricula = require('../models/Matricula');

exports.create = (req, res) => {
    Matricula.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.find = (req, res) => {
    Matricula.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.findById = (req, res) => {
    Matricula.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.findByIdAndUpdate = (req, res, next) => {
    Matricula.findByIdAndUpdate(req.params.id, {
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
    Matricula.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
};
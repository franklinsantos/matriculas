// Tipo model
let Tipo = require('../models/Tipo');

exports.create = (req, res) => {
    Tipo.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.find = (req, res) => {
    Tipo.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.findById = (req, res) => {
    Tipo.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.findByIdAndUpdate = (req, res, next) => {
    Tipo.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);;
        } else {
            res.json(data);
        }
    })
};


exports.findOneAndRemove = (req, res, next) => {
    Tipo.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
};
// Turno model
let Turno = require('../models/Turno');

exports.create = (req, res) => {
    Turno.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.find = (req, res) => {
    Turno.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.findById = (req, res) => {
    Turno.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

exports.findByIdAndUpdate = (req, res, next) => {
    Turno.findByIdAndUpdate(req.params.id, {
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
    Turno.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
};
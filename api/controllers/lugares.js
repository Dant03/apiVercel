const express = require('express');
const res = require('express/lib/response');
const Lugar = require('../models/Lugar');

const router = express.Router()

router.get('/', (req, res) => {
    Lugar.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
    Lugar.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    Lugar.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    Lugar.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
    Lugar.findByIdAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router;
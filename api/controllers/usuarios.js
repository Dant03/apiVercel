const express = require('express')
const res = require('express/lib/response')
const Usuario = require('../models/Usuario')

const router = express.Router()

router.get('/', (req, res) => {
    Usuario.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
    Usuario.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    Usuario.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    Usuario.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
    Usuario.findByIdAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router

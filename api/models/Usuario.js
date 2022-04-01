const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Usuario = mongoose.model('Usuario', new Schema({
    nombre : String,
    celular: String,
    correo: String,
    contraseña:  String,
}))

module.exports = Usuario
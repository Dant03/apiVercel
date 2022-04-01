const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lugar = mongoose.model('Lugar', new Schema({
    nombre: String,
    direccion: String,
    descripcion:  String,
    img:  String,
    usu_id:  String,
}))

module.exports = Lugar 
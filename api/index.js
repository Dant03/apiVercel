const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const usuarios = require('./controllers/usuarios')
const lugares = require('./controllers/lugares')


const app = express()

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
//mongodb+srv://admin:admin@cluster0.frdof.mongodb.net/todosabordo?retryWrites=true&w=majority
app.get("*", (req, res) => {
    res.send("Conectado existosamente a MongoDB");
});
app.use('/api/usuarios', usuarios)
app.use('/api/lugares', lugares)

module.exports = app
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehiculoSchema = new Schema({
    placa: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    hora: {
        type: Date,
        required: true
    },
    pathImage: {
        type: String,
        required: true
    }
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

module.exports = Vehiculo;

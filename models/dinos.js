const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dinoSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Dossier: {
        Diet: {
            type: String,
            required: true
        },
        Tameable: {
            type: Boolean,
            required: true
        },
        Rideable: {
            type: Boolean,
            required: true
        },
        Temperament: {
            type: String,
            required: true
        }
    }

})

module.exports = mongoose.model("Dino", dinoSchema)
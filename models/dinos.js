const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dinoSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Image: {
        type: URL,
        required: true
    },
    Dossier: {
        Diet: {
            type: String,
            required: true
        },
        Tamable: {
            type: Boolean,
            required: true
        },
        Ridable: {
            type: Boolean,
            required: true
        },
        Temperment: {
            type: String,
            required: true
        }
    }

})

module.exports = mongoose.model("Dino", dinoSchema)
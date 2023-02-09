const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Fake Data
// const dinos = [
//     {
//     name: "Amargasaurus", 
//     img: "", 
//     diet: "Herbivore",
//     tameable: true,
//     rideable: true,
//     temperament: "Aggressive"
//     },

//     { 
//     name: "Kentrosaurus", 
//     img: "", 
//     diet: "Herbivore",
//     tameable: true,
//     rideable: false,
//     temperament: "Short-Tempered"
//     },

//     {
//     name: "Dilophosaur", 
//     img: "", 
//     diet: "Carnivore",
//     tameable: true,
//     rideable: false,
//     temperament: "Territorial"
//     },

//     {
//     name: "Spinosaurus", 
//     img: "", 
//     diet: "Carnivore",
//     tameable: true,
//     rideable: true,
//     temperament: "Territorial"
//     },

//     {
//     name: "Baryonyx", 
//     img: "", 
//     diet: "Piscivore",
//     tameable: true,
//     rideable: true,
//     temperament: "Territorial"
//     },

//     {
//     name: "Tyrannosaurus", 
//     img: "", 
//     diet: "Carnivore",
//     tameable: true,
//     rideable: true,
//     temperament: "Aggresive"
//     },

// ]

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://Amurillo:Alex2015@cluster0.uvmcw4x.mongodb.net/ARKdb?retryWrites=true&w=majority", () => console.log('connected to database'))


app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

const express = require("express")
const dossierRouter = express.Router()
const Dino = require("../models/dinos")

// get all dossiers
// dossierRouter.get("/", (req, res, next) => {
//     Dino.find((err, dossier) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(dossier)
//     })
// })
// get one dossier
// dossierRouter.get('/:dinoId',(req, res, next)=> {
//     Dino.findById({_id: req.params.dinoId}, (err, Dino.Dossier) => {
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200). send(Dino.Dossier)
//     })
// })

module.exports = dossierRouter
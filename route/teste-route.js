const express = require('express')
const router = express.Router()
const testeService = require('../service/teste-service')

router.get('/teste', async function(req, res, next) {
    try {
        const teste = await testeService.getTestes()
        res.json(teste)
    } catch (err) {
        // res.status(500)
        //res.json({error: err})
        next(err)
    }
})

router.get('/teste/:id', async function(req, res, next) {
    try {
        const teste = await testeService.getTeste(req.params.id)
        res.json(teste)
    } catch (err) {
        // res.status(500)
        //res.json({error: err})
        next(err)
    }
})

router.post('/teste',async function(req, res, next) {    
    const teste = req.body    
    try {
        const newTeste = await testeService.saveTeste(teste)
        res.status(201).json(newTeste);
    } catch (err) {        
        next(err)
    }
})


router.put('/teste/:id',async function(req, res, next) {    
    const teste = req.body   
      try {
        const newTeste = await testeService.updateTeste(req.params.id, teste)
        res.status(204).end();
    } catch (err) {        
        next(err)
    }
})

module.exports = router
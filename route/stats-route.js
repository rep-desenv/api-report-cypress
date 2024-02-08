const express = require('express')
const router = express.Router()
const statsService = require('../service/stats-service')

router.get('/stats', async function(req, res, next){
    try {
        const tests = await statsService.getStatses()
        res.status(200).json(tests)        
    } catch (error) {
        next(error)
    }
})

router.get('/stats/:id', async function(req, res, next){
    try {
        const test = await statsService.getStats(req.params.id)
        res.status(200).json(test)
    } catch (error) {
        next(error)
    }
})

router.post('/stats', async function(req, res, next){    
    const statsBody = req.body  
     
    try {
        const newTest = await statsService.saveStats(statsBody)
        res.status(200).json(newTest)
    } catch (error) {
        next(error)
    }
})

router.put('/stats/:id', async function(req, res, next){
    const testBody = req.body
    try {
        const updTest = await statsService.updateStats(req.params.id, testBody)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})

router.delete('/stats/:id', async function(req, res, next){
    try {
        const delTest = await statsService.deleteStats(req.params.id)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})


module.exports = router
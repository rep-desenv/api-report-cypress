const express = require('express')
const router = express.Router()
const reporterService = require('../service/reporter-service')

router.get('/reporter', async function(req, res, next){
    try {
        const reporter = await reporterService.getReporters()
        res.status(200).json(reporter)        
    } catch (error) {
        next(error)
    }
})

router.get('/reporter/:id', async function(req, res, next){
    try {
        const reporter = await reporterService.getReporter(req.params.id)
        res.status(200).json(reporter)
    } catch (error) {
        next(error)
    }
})

router.post('/reporter', async function(req, res, next){    
    const reporterBody = req.body  
     
    try {
        const newReporter = await reporterService.saveReporter(reporterBody)
        res.status(200).json(newReporter)
    } catch (error) {
        next(error)
    }
})

router.put('/reporter/:id', async function(req, res, next){
    const reporterBody = req.body
    try {
        const updReporter = await reporterService.updateReporter(req.params.id, reporterBody)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})

router.delete('/reporter/:id', async function(req, res, next){
    try {
        const delReporter = await reporterService.deleteReporter(req.params.id)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})

module.exports = router
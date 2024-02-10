const express = require('express')
const router = express.Router()
const testsProcessService = require('../service/tests_process-service')

router.get('/testsprocess', async function(req, res, next){
    try {
        const tests = await testsProcessService.getTestsProcesses()
        res.status(200).json(tests)        
    } catch (error) {
        next(error)
    }
})

router.get('/testsprocess/:id', async function(req, res, next){
    try {
        const test = await testsProcessService.getTestsProcess(req.params.id)
        res.status(200).json(test)        
    } catch (error) {        
        next(error)
    }
})

router.post('/testsprocess', async function(req, res, next){    
    const detailBody = req.body  
     
    try {
        const newTest = await testsProcessService.saveTestsProcess(detailBody)
        res.status(200).json(newTest)
    } catch (error) {
        next(error)
    }
})

router.put('/testsprocess/:id', async function(req, res, next){
    const testBody = req.body
    try {
        const updTest = await testsProcessService.updateTestsProcess(req.params.id, testBody)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})

router.delete('/testsprocess/:id', async function(req, res, next){
    try {
        const delTest = await testsProcessService.deleteTestsProcess(req.params.id)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})


module.exports = router
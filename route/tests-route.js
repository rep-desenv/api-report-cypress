const express = require('express')
const router = express.Router()
const testsService = require('../service/tests-service')

router.get('/tests', async function(req, res, next){
    try {
        const tests = await testsService.getTests()
        res.status(200).json(tests)        
    } catch (error) {
        next(error)
    }
})

router.get('/tests/:id', async function(req, res, next){
    try {
        const test = await testsService.getTest(req.params.id)
        res.status(200).json(test)
    } catch (error) {
        next(error)
    }
})

router.post('/tests', async function(req, res, next){    
    const testBody = req.body    
    try {
        const newTest = await testsService.saveTest(testBody)
        res.status(200).json(newTest)
    } catch (error) {
        next(error)
    }
})

router.put('/tests/:id', async function(req, res, next){
    const testBody = req.body
    try {
        const updTest = await testsService.updateTest(req.params.id, testBody)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})

router.delete('/tests/:id', async function(req, res, next){
    try {
        const delTest = await testsService.deleteTest(req.params.id)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})


module.exports = router
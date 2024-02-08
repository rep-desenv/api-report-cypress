const express = require('express')
const router = express.Router()
const detailService = require('../service/detail-service')

router.get('/detail', async function(req, res, next){
    try {
        const tests = await detailService.getDetails()
        res.status(200).json(tests)        
    } catch (error) {
        next(error)
    }
})

router.get('/detail/:id', async function(req, res, next){
    try {
        const test = await detailService.getDetail(req.params.id)
        res.status(200).json(test)
    } catch (error) {
        next(error)
    }
})

router.post('/detail', async function(req, res, next){    
    const detailBody = req.body  
     
    try {
        const newTest = await detailService.saveDetail(detailBody)
        res.status(200).json(newTest)
    } catch (error) {
        next(error)
    }
})

router.put('/detail/:id', async function(req, res, next){
    const testBody = req.body
    try {
        const updTest = await detailService.updateDetail(req.params.id, testBody)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})

router.delete('/detail/:id', async function(req, res, next){
    try {
        const delTest = await detailService.deleteDetail(req.params.id)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})


module.exports = router
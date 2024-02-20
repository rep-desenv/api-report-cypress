const express = require('express')
const router = express.Router()
const execService = require('../service/exec-service')

router.get('/exec', async function(req, res, next){
    try {
        const exec = await execService.getExecs()
        res.status(200).json(exec)        
    } catch (error) {
        next(error)
    }
})

router.get('/exec/:id', async function(req, res, next){
    try {
        const exec = await execService.getExec(req.params.id)
        res.status(200).json(exec)
    } catch (error) {
        next(error)
    }
})

router.post('/exec', async function(req, res, next){    
    const execBody = req.body  
     
    try {
        const newexec = await execService.saveExec(execBody)
        res.status(200).json(newexec)
    } catch (error) {
        next(error)
    }
})

router.put('/exec/:id', async function(req, res, next){    
    const execBody = req.body
    try {
        const updexec = await execService.updateExec(req.params.id, execBody)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})

router.delete('/exec/:id', async function(req, res, next){
    try {
        const delexec = await execService.deleteExec(req.params.id)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})

module.exports = router
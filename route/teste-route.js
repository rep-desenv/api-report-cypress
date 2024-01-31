const express = require('express')
const router = express.Router()
const testeService = require('../service/teste-service')

router.get('/teste', async (req, res, next) => {
    // console.log('Entrei na primeira rota GET.')
    // return res.json({mesage:'Entrei na rota correta GET!', status: 'ok'})
    
    try {
        const teste = await testeService.getPosts()
        res.json(teste)
    } catch (err) {
        // res.status(500)
        // res.json({error: er})
        next(err)
    }
})

router.post('/teste',(req, res)=>{
    console.log('Entrei na primeira rota POST.')
    return res.json({mesage:'Entrei na rota correta POST!', status: 'ok'})
})


router.put('/teste',(req, res)=>{
    console.log('Entrei na primeira rota PUT.')
    return res.json({mesage:'Entrei na rota correta PUT!', status: 'ok'})
})


module.exports = router
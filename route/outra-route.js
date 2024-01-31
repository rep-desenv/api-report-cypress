const express = require('express')
const router = express.Router()
const testeService = require('../service/teste-service')

router.get('/outra',(req, res)=>{
    console.log('Entrei na segunda rota.')
    return res.json({mesage:'Entrei na rota correta GET!', status: 'ok'})
})

router.post('/outra',(req, res)=>{
    console.log('Entrei na segunda rota.')
    return res.json({mesage:'Entrei na rota correta POST!', status: 'ok'})
})


router.put('/outra',(req, res)=>{
    console.log('Entrei na segunda rota.')
    return res.json({mesage:'Entrei na rota correta PUT!', status: 'ok'})
})


module.exports = router
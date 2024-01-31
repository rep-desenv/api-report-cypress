require('dotenv').config()
const express = require('express')

const app = express()
app.use(express.json())

// app.use('/', async (req, res)=>{ 
//     res.json({ mesage: 'Funcinando!', status:'ok'})
// })

app.use('/', 
    require('./route/teste-route.js'),
    require('./route/outra-route.js')
)

app.listen(process.env.PORT, ()=>{
    console.log(`Escutando na porta ${process.env.PORT}...`)
})
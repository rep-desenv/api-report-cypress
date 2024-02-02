require('dotenv').config()
const express = require('express')

const app = express()
app.use(express.json())

app.use('/', 
    require('./route/teste-route.js')
    ,require('./route/outra-route.js')
)

app.use(function (error, req, res, next) {
	if (error.message === 'Post already exists') {
		return res.status(409).send(error.message);
	}
	if (error.message === 'Item not found') {
		return res.status(404).send(error.message);
	}    
	res.status(500).send(error.message);
});


app.listen(process.env.PORT, ()=>{
    console.log(`Escutando na porta ${process.env.PORT}...`)
})
const knex = require('knex')
const database = require('../infra/database')

exports.getTestes = function() {    
    return database.raw('select * from teste')
        .then(function(resp){ 
            return resp[0] 
        })
 
}

exports.getTeste = function(id) {     
    return database.raw('select * from teste where id = ?',[id])
        .then(function(resp){ 
            return resp[0] 
        })
 
}

exports.getTesteDesc = function( desc_teste ) {    
    return database.raw('select * from teste where desc_teste =?',[desc_teste])
        .then(function(resp){            
            return resp[0] 
        })
}

exports.saveTeste = async function(teste){    
    const insertRows = await database('teste').insert({ desc_teste: teste.desc_teste})

    return insertRows
}

exports.updateTeste = async function(id, teste){    
    //const insertRows = await database('teste').insert({ desc_teste: teste.desc_teste})  
    const upd = await database('teste')
        .where('id',id)
        .update({
            desc_teste: teste.desc_teste
        })

    return upd
}


exports.deleteTeste = async function(id){
    const del = await database('teste')
        .where('id',id)
        .del()
    
        return del    
}
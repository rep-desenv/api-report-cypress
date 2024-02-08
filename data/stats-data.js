const knex = require('knex')
const database = require('../infra/database')

exports.getStatses = function() {
    return database.raw('select * from stats')
        .then(function(resp){            
            return resp[0]
        })
}

exports.getStats = function(id){
    return database.raw('select * from stats where id=?',[id])
        .then(function(resp){
            return resp[0]
        })
}


exports.postStats = async function(stats){    
    const insertRow = await database('stats')
        .insert({
            duration: stats.duration,
            started_at: stats.started_at,
            ended_at: stats.ended_at,
            qtd_tests: stats.qtd_tests,
            id_datail: stats.id_datail
        })

    return insertRow
}

exports.putStats = async function(id, test){    
    const updateRow = await database('stats')
        .where('id', id)
        .update({
            duration: test.duration,
            started_at: test.started_at,
            ended_at: test.ended_at,
            qtd_tests: test.qtd_tests,
            id_datail: test.id_datail
        })

    return updateRow
}

exports.deleteStats = async function(id){
    const deleteRow = await database('stats')
        .where('id',id)
        .del()
    
    return deleteRow
}
const knex = require('knex')
const database = require('../infra/database')
const bodyParser = require('body-parser')

exports.getExecs = function(){
    return database.raw('select * from exec')
        .then(function(resp){            
            return resp[0]
        })
}

exports.getExec = function(id){
    return database.raw('select * from exec where id=?',[id])
        .then(function(resp){
            return resp[0]
        })
}

exports.postExec = async function(bodyExec){
    const insertRow = await database('exec')
        .insert({
            id: bodyExec.id,
            created_at: bodyExec.created_at,
            status_process: bodyExec.status_process
        })
    
        return insertRow
}

exports.putExec = async function(id, bodyExec){
    const updateRow = await database('exec')
        .where('id', id)
        .update({
            created_at: bodyExec.created_at,
            status_process: bodyExec.status_process
        })

    return updateRow
}

exports.deleteExec = async function(id){
    const deleteRow = await database('exec')
        .where('id', id)
        .del()

    return deleteRow
}

exports.dumpExecProcess = async function(body){
    try {
        const insert = await database.raw('insert into exec_process (select * from exec where id=?)',[body.id])
        return insert
    } catch (error) {
        return error
    }    
}

exports.deleteExecProcess = function(id){    
    const deleteRow =  database('exec')    
    .del()

    return deleteRow
}
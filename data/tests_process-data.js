const knex = require('knex')
const database = require('../infra/database')

exports.getTestsProcesses = function() {
    return database.raw('select * from tests_process')
        .then(function(resp){            
            return resp[0]
        })
}

exports.getTestsProcess = function(id){
    return database.raw("select * from tests_process where id=?",[id])
        .then(function(resp){            
            return resp[0]
        })
}

exports.getTestsProcessIdExec = function(idExec){
    return database.raw("select * from tests_process where id_exec=?",[idExec])
        .then(function(resp){            
            return resp[0]
        })
}

exports.postTestsProcess = async function(testProcess){    
    const insertRow = await database('tests_process')
        .insert({
            id_exec: testProcess.id_exec,
            file_name: testProcess.file_name,
            created_at: testProcess.created_at,
            absolute_path: testProcess.absolute_path
        })

    return insertRow
}

exports.putTestsProcess = async function(id, testProcess){      
    const updateRow = await database('tests_process')
        .where('id_exec', id)
        .where('file_name', testProcess.file_name)
        .update({
            status_process: testProcess.status_process
        })
    
    return updateRow
}

exports.deleteTestsProcess = async function(id){
    const deleteRow = await database('tests_process')
        .where('id',id)
        .del()
    
    return deleteRow
}
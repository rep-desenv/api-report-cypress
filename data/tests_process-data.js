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

// exports.putTestsProcess = async function(idExec, testProcess){    
//     const updateRow = await database('tests_process')
//         .where('id_exec', [`'${idExec}'`])
//         .update({
//             status_process: testProcess.status_process
//         })

//     return updateRow
// }

exports.putTestsProcess = async function(idExec, testProcess){    
    return await database.raw("update tests_process set status_process = 2323 where id_exec='3bea8192-30f9-4a6c-a899-93f34203fc5a'",[idExec])
    .then(function(resp){            
        return resp[0]
    })
}


exports.deleteTestsProcess = async function(id){
    const deleteRow = await database('tests_process')
        .where('id',id)
        .del()
    
    return deleteRow
}
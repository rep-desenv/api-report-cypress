const knex = require('knex')
const database = require('../infra/database')

exports.getReporters = function() {
    return database.raw('select * from reporter')
        .then(function(resp){            
            return resp[0]
        })
}

exports.getReporter = function(id){
    return database.raw('select * from reporter where id=?',[id])
        .then(function(resp){
            return resp[0]
        })
}


exports.postReporter = async function(reporter){    
    const insertRow = await database('reporter')
        .insert({
            suites: reporter.suites,
            tests: reporter.tests,
            passes: reporter.passes,
            pending: reporter.pending,
            failures: reporter.failures,
            start: reporter.start,
            end: reporter.end,
            duration: reporter.duration,
            id_detail: reporter.id_detail
        })

    return insertRow
}

exports.putReporter = async function(id, reporter){    
    const updateRow = await database('reporter')
        .where('id', id)
        .update({
            suites: reporter.suites,
            tests: reporter.tests,
            passes: reporter.passes,
            pending: reporter.pending,
            failures: reporter.failures,
            start: reporter.start,
            end: reporter.end,
            duration: reporter.duration
        })

    return updateRow
}

exports.deleteReporter = async function(id){
    const deleteRow = await database('reporter')
        .where('id',id)
        .del()
    
    return deleteRow
}
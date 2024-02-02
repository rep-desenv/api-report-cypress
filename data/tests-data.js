const knex = require('knex')
const database = require('../infra/database')

exports.getTests = function() {
    return database.raw('select * from tests')
    .then(function(resp){
        return reps[0]
    })
}

exports.getTest = function(id){
    return database.raw('select * from tests where id=?',[id])
        .then(function(resp){
            return resp[0]
        })
}

exports.postTest = async function(test){
    const insertRow = await database('tests')
        .insert({
            state: test.state,
            display_error: test.display_error,
            duration: test.duration,
            test_name: test.test_name,
            id_stats : test.id_stats
        })

    return insertRow
}

exports.putTest = async function(id, test){
    const updateRow = await database('tests')
        .where('id',id)
        .update({
            state: test.state,
            display_error: test.display_error,
            duration: test.duration,
            test_name: test.test_name,
            id_stats: test.id_stats
        })

    return updateRow
}

exports.deleteTest = async function(id){
    const deleleteRow = await database('tests')
        .where('id',id)
        .del()
    
    return deleleteRow
}
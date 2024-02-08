const knex = require('knex')
const database = require('../infra/database')

exports.getDetails = function() {
    return database.raw('select * from detail')
        .then(function(resp){            
            return resp[0]
        })
}

exports.getDetail = function(id){
    return database.raw('select * from detail where id=?',[id])
        .then(function(resp){
            return resp[0]
        })
}


exports.postDetail = async function(detail){    
    const insertRow = await database('detail')
        .insert({
            file_name: detail.file_name,
            created_at: detail.created_at,
            absolute_path: detail.absolute_path
        })

    return insertRow
}

exports.putDetail = async function(id, detail){    
    const updateRow = await database('detail')
        .where('id', id)
        .update({
            file_name: detail.file_name,
            created_at: detail.created_at,
            absolute_path: detail.absolute_path
        })

    return updateRow
}

exports.deleteDetail = async function(id){
    const deleteRow = await database('detail')
        .where('id',id)
        .del()
    
    return deleteRow
}
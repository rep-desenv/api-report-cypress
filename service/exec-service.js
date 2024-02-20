const execData = require('../data/exec-data')
const { json,  } = require('body-parser')

exports.getExecs = function(){
    return execData.getExecs()
}

exports.getExec = function (id){
    return exec = execData.getExec(id)
    if(exec.length == 0 ) throw new Error("Item not found")
    return exec
}

exports.saveExec = async function( req ){    
    return execData.postExec(req)
}

exports.updateExec = async function(id, req) {
    if (id.toLowerCase() === 'd'){
        return execData.dumpExecProcess(req)
    } 
    const existingExec = await execData.getExec(id)
    if (existingExec.length == 0) throw new Error("Item not found")

    return execData.putExec(id, req)
}

exports.deleteExec = async function(id){
    if (id.toLowerCase() === 'd'){
        return execData.deleteExecProcess(id)
    } 
    const existingExec= await execData.getExec(id)
    if (existingExec == 0) throw new Error("Item not found")

    return execData.deleteExec(id)
}
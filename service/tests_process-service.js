const testsProcessData = require('../data/tests_process-data')
const { json } = require('body-parser');

exports.getTestsProcesses = function(){
    return testsProcessData.getTestsProcesses()
}

exports.getTestsProcess = async function(id){ 
    if (id.toLowerCase() === 'p'){
        return testsProcessData.showPainel()
    }   
    const testProcess = await testsProcessData.getTestsProcess(id)
    if(testProcess.length == 0 ) throw new Error("Item not found")
    return testProcess
}

exports.saveTestsProcess = async function (testeProcess){
    return testsProcessData.postTestsProcess(testeProcess)
}

exports.updateTestsProcess = async function(idExec, testProcess){    
    const existingTestProcess = await testsProcessData.getTestsProcessIdExec(idExec)
    if (existingTestProcess.length == 0) throw new Error("Item not found")

    return testsProcessData.putTestsProcess(idExec, testProcess)
}

exports.deleteTestsProcess = async function(id){
    const existingTestProcess = await testsProcessData.getTestsProcess(id)
    if (existingTestProcess.length == 0) throw new Error("Item not found")

    return testsProcessData.deleteTestsProcess(id)
}
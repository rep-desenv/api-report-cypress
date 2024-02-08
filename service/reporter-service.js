const reporterData = require('../data/reporter-data')
const { json } = require('body-parser');

exports.getReporters = function(){
    return reporterData.getReporters()
}

exports.getReporter = async function(id){
    const reporter = await reporterData.getReporter(id)
    if(reporter.length == 0 ) throw new Error("Item not found")
    return reporter
}

exports.saveReporter = async function (reporter){
    return reporterData.postReporter(reporter)
}

exports.updateReporter = async function(id, reporter){
    const existingReporter = await reporterData.getReporter(id)
    if (existingReporter.length == 0) throw new Error("Item not found")

    return reporterData.putReporter(id, reporter)
}

exports.deleteReporter = async function(id){
    const existingReporter = await reporterData.getReporter(id)
    if (existingReporter == 0) throw new Error("Item not found")

    return reporterData.deleteReporter(id)
}
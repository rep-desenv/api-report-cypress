const statsData = require('../data/stats-data')
const { json } = require('body-parser');

exports.getStatses = function(){
    return statsData.getStatses()
}

exports.getStats = async function(id){
    const test = await statsData.getStats(id)
    if(test.length == 0 ) throw new Error("Item not found")
    return test
}

exports.saveStats = async function (stats){
    return statsData.postStats(stats)
}

exports.updateStats = async function(id, test){
    const existingTest = await statsData.getStats(id)
    if (existingTest.length == 0) throw new Error("Item not found")

    return statsData.putStats(id, test)
}

exports.deleteStats = async function(id){
    const existingTest = await statsData.getStats(id)
    if (existingTest == 0) throw new Error("Item not found")

    return statsData.deleteStats(id)
}